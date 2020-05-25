# @param {String[][]} tickets
# @return {String[]}
def find_itinerary(tickets)
    graph = Hash.new { |hash, key| hash[key] = [] }
    
    tickets.each do |t|
       graph[t[0]] << t[1]
    end
    
    graph.each_key do |k|
        graph[k] = graph[k].sort
    end
        
    @res = ["JFK"]
    dfs(graph, tickets.length + 1, "JFK")
    @res
    
end

def dfs(graph, target, nxt)

    return if graph[nxt].empty?
    len = graph[nxt].length
    i = 0
    while i < len
        new_nxt = graph[nxt].delete_at(i)
        @res << new_nxt
        dfs(graph, target, new_nxt)
        return if @res.length == target
        graph[nxt].insert(i, new_nxt)
        @res.pop
        i += 1
    end
    
end










# # @param {String[][]} tickets
# # @return {String[]}
# def find_itinerary(tickets)
#     graph = Hash.new { |hash, key| hash[key] = [] }
    
#     tickets.each do |t|
#        graph[t[0]] << t[1]
#     end
    
#     graph.each_key do |k|
#         graph[k] = graph[k].sort
#     end
        
#     dfs(graph, tickets.length + 1, "JFK", ["JFK"])
    
# end

# def dfs(graph, target, nxt, res)

#     while !graph[nxt].empty?
#         if graph[nxt].length > 1
#             len = graph[nxt].length
#             len.times do |i|
#                 new_res = res
#                 new_nxt = graph[nxt][i]
#                 graph[nxt] = graph[nxt] - [graph[nxt][i]]
#                 new_res << new_nxt
#                 attempt = dfs(graph, target, new_nxt, new_res)
#                 if attempt.length == target
#                     return attempt
#                 else
#                     graph[nxt] += [new_nxt]
#                 end
#             end
#         else
#             new_nxt = graph[nxt].shift
#             res << new_nxt
#             nxt = new_nxt
#         end
#     end
    
#     res

# end


