# [['hot', 2]]
# [['dot', 3], ['lot', 3]]
# [['dog', 4], ['log', 4]]

# CORRECT ANSWER USES BFS — solution below times out

class Solution:
    def __init__(self):
        self.minCount = None
        
    def ladderLength(self, beginWord, endWord, wordList):
        if endWord not in wordList: return 0
        self.getPossibilities(beginWord, endWord, wordList)
        if not self.minCount: return 0
        return self.minCount
        
    def getPossibilities(self, beginWord, endWord, wordList, count = 1):
        for j in range(len(wordList)):
            word = wordList[j]
            numDiffChar = 0
            for i in range(len(beginWord)):
                if beginWord[i] != word[i]:
                    numDiffChar += 1
                if numDiffChar > 1:
                    break
            if numDiffChar == 1:
                if word == endWord:
                    if self.minCount == None:
                        self.minCount = 1 + count
                    else:
                        self.minCount = 1 + count if 1 + count < self.minCount else self.minCount
                else:
                    newWordList = wordList[0:j] + wordList[j+1:]
                    self.getPossibilities(word, endWord, newWordList, 1 + count)

        
#         if endWord not in wordList:
#             return 0
#         possibilities = []
#         for j in range(len(wordList)):
#             word = wordList[j]
#             possibilities.append(1 + self.ladderLength(word, endWord, newWordList))
#         if len(possibilities) == 0:
#             return 0
#         return min(possibilties)
    
#     def transformPossible(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
#         if endWord not in wordList:
#             return False
#         for j in range(len(wordList)):
#             word = wordList[j]
#             numDiffChar = 0
#             for i in range(len(beginWord)):
#                 if beginWord[i] != word[i]:
#                     numDiffChar += 1
#                 if numDiffChar > 1:
#                     break
#             if numDiffChar == 1:
#                 if word == endWord:
#                     return True
#                 newWordList = wordList[0:j] + wordList[j+1:-1]
#                 if self.transformPossible(word, endWord, newWordList):
#                     return True
#         return False
    
    
    