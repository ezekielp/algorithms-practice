# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Boolean}
require 'set'

def can_finish(num_courses, prerequisites)
    return true if prerequisites.empty?
    return true if num_courses == 0
    
    edges = Set.new([])
    outgoing_edges = Hash.new(0)
    graph = Hash.new { |h, k| h[k] = [] }

    prerequisites.each do |courses|
        e1 = courses[0]
        e2 = courses[1]
        
        graph[e1] << e2
        outgoing_edges[e2] += 1
        edges.add(e1)
        edges.add(e2)
    end
    
    return false if num_courses > edges.size
    
    count = 0
    queue = []
    
    edges.each do |e|
        if outgoing_edges[e] == 0
            queue << e
        end
    end
    
    return false if queue.length == 0
    
    until queue.empty?
        node = queue.shift
        edges.delete(node)
        count += 1
        
        new_nodes = graph[node]
        
        new_nodes.each do |n|
            outgoing_edges[n] -= 1
            queue << n if outgoing_edges[n] == 0
        end
        
    end
    
    print edges
    count >= num_courses || edges.empty?
    
end


# [7, 9, 0, 1, 2]
# num = 0 TRUE
# num_courses = 5
# [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [7, 9]
# 0: [1, 2]
# 1: [3, 4]
# 2: [5]
# 7: [9] 
#
# [0, 7, 1, 2, 9, 3, 4, 5]
# Make a queue of any new nodes that are no longer outgoing edges?
# { 1: 1
#   2: 1
#   3: 1
#   4: 1
#   5: 1
#   9: 1 
#   0: 0 
#   7: 0 
#
# }









