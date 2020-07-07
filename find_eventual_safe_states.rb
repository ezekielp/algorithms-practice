# @param {Integer[][]} graph
# @return {Integer[]}
require 'set'

def eventual_safe_nodes(graph)
    @graph = {}
    graph.each_with_index { |edges, i| @graph[i] = edges }
    
    @safe = Set.new([])
    @unsafe = Set.new([])
    
    @graph.keys.each do |k|
        res = dfs(k)
        if res[0]
            @safe += res[1]
        else
            @unsafe += res[1]
        end
    end
    
    @safe.to_a.sort
end

def dfs(start, current = start, path = Set.new([]))
    path.add(current)
    
    # it's a terminal node -- return true and the path
    if @graph[current].empty?
        return [true, path]
    end
    
    @graph[current].each do |e|
        
        # it's a path with a cycle -- return false and the path
        if e == start
            return [false, path]

        # we need to keep searching -- do dfs again
        else
            dfs(start, e, path)
        end
    end
end




