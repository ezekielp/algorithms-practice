class Solution(object):
    def carPooling(self, trips, capacity):
        """
        :type trips: List[List[int]]
        :type capacity: int
        :rtype: bool
        """
        tripsDict = {}
        for trip in trips:
            if trip[1] in tripsDict:
                tripsDict[trip[1]] += trip[0]
            else:
                tripsDict[trip[1]] = trip[0]
            if trip[2] in tripsDict:
                tripsDict[trip[2]] -= trip[0]
            else:
                tripsDict[trip[2]] = -trip[0]
        passCount = 0
        for i in range(1001):
            if i in tripsDict:
                passCount += tripsDict[i]
            if passCount > capacity:
                return False
        return True
