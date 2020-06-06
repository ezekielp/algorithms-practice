class Solution(object):
    def findMinDifference(self, timePoints):
        """
        :type timePoints: List[str]
        :rtype: int
        """
        tuple_time_points = []
        for tp in timePoints:
            first_two = int(tp[:2])
            last_two = int(tp[-2:])
            tuple_time_points.append([first_two, last_two])

        sorted_time_points = sorted(
            tuple_time_points, key=lambda e: (e[0], e[1]))

        min_val = float("inf")
        for idx, tp in enumerate(sorted_time_points):
            if sorted_time_points[idx + 1]:
                older_minutes = sorted_time_points[idx +
                                                   1][1](sorted_time_points[idx + 1][0] * 60)
                newer_minutes = (tp[0] * 60) + tp[1]
                diff = older_minutes - newer_minutes
                if diff < min_val:
                    min_val = diff

        new_first_value = sorted_time_points[0][1] + \
            (sorted_time_points[0][0]*60)
        last_value = sorted_time_points[-1][1] + (sorted_time_points[-1][0]*60)
        new_diff = new_first_value - last_value
        if new_diff < min_val:
            min_val = new_diff

        return min_val

# time_stamp = "00:45"
# print(time_stamp[:2])
# print(time_stamp[-2:])


solution = Solution()
# solution.findMinDifference(["23:59","02:20", "02:45", "23:00"])
# print(18937491749012750915 > float("inf"))
# print(list(enumerate(["23:59","02:20", "02:45", "23:00"])))
arr = ["23:59", "02:20", "02:45", "23:00"]
# print(arr[2])
