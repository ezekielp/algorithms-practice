class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        pairs = []
        for d1 in range(1, 10):
            for d2 in range(0, 10):
                if abs(d1 - d2) == k:
                    pairs.append([str(d1), str(d2)])
        addOn = n - 2
        while addOn > 0:
            newPairs = []
            for p in pairs:
                dy = int(p[-1])
                for dx in range(0, 10):
                    if abs(dy - dx) == k:
                        newPairs.append(p + [str(dx)])
            pairs = newPairs
            addOn -= 1
        return list(map(lambda x: int(''.join(x)), pairs))
                    
                    # return self.createNums(pairs, n - 2)

    # def createRes(self, pairs):
    #     res = []
    #     for p in pairs:
    #         res.append()
            
            
    # def createNums(self, pairs, addOn):
    #     res = []
    #     for p in pairs:
    #         l = str(p[0]) + str(p[1])
    #         count = addOn
    #         while count > 0:
    #             l += l[-2]
    #             count -= 1
    #         res.append(int(l))
    #     return res