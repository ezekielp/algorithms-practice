class Solution:
    def isPathCrossing(self, path: str) -> bool:
        currentPoint = [0, 0] # [0, 0]
        traveledTo = set() # {(0, 0), (0, 1), (1, 1), (1, 0)}
        for direction in path:
            tuplePoint = tuple(currentPoint) # (1, 0)
            if tuplePoint in traveledTo: # False
                return True
            traveledTo.add(tuplePoint)
            if direction == 'N':
                currentPoint[1] += 1
            elif direction == 'S':
                currentPoint[1] -= 1
            elif direction == 'E':
                currentPoint[0] += 1
            elif direction == 'W':        
                currentPoint[0] -= 1
        if tuple(currentPoint) in traveledTo:
            return True
        return False
