STDOUT.sync = true # DO NOT REMOVE
# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# n: the total number of nodes in the level, including the gateways
# l: the number of links
# e: the number of exit gateways
require 'set'

n, l, e = gets.split(" ").collect {|x| x.to_i}

@graph = Hash.new { |h, k| h[k] = Set.new([]) }
@num_vertices = @graph.keys.length

l.times do
    # n1: N1 and N2 defines a link between these nodes
    n1, n2 = gets.split(" ").collect {|x| x.to_i}
    @graph[n1] << n2
    @graph[n2] << n1
end

@exits = Set.new([])
e.times do
    ei = gets.to_i # the index of a gateway node
    @exits.add(ei)
end


def shortest_path(src, dest)
    res = BFS(src, dest)

    return false unless res

    predecessors, distances = res

    path = []
    crawl = dest
    path << crawl
    until predecessors[crawl] == -1
        path << predecessors[crawl]
        crawl = predecessors[crawl]
    end

    indices = [path[-1], path[-2]]

    [distances[dest], indices]

end

def BFS(src, dest)
    predecessors = {}
    distances = {}
    visited = {}

    @graph.each_key do |edge|
        predecessors[edge] = -1
        distances[edge] = Float::INFINITY
        visited[edge] = false
    end
    queue = []

    visited[src] = true
    distances[src] = 0
    queue << src

    until queue.empty?
        current = queue.shift
        @graph[current].each do |edge|
            unless visited[edge]
                visited[edge] = true
                distances[edge] = distances[current] + 1
                predecessors[edge] = current
                queue << edge

                return [predecessors, distances] if edge == dest
            end
        end
    end

    false

end

# game loop
loop do
    si = gets.to_i # The index of the node on which the Skynet agent is positioned this turn
    
    # Write an action using puts
    # To debug: STDERR.puts "Debug messages..."

    paths = @exits.map { |e| shortest_path(e, si) }.reject { |res| !res }
    res = paths.reduce { |acc, curr| curr[0] < acc[0] ? curr : acc }

    i0, i1 = res[1]
    @graph[i0].delete(i1)
    @graph[i1].delete(i0)
    
    # Example: 0 1 are the indices of the nodes you wish to sever the link between
    # puts "0 1"
    puts res[1].join(" ")
end