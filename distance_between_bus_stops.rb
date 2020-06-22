# @param {Integer[]} distance
# @param {Integer} start
# @param {Integer} destination
# @return {Integer}
def distance_between_bus_stops(distance, start, destination)
    total = distance.sum
    d1 = start < destination ? distance[start...destination].sum : distance[destination...start].sum
    d2 = total - d1
    [d1, d2].min
end