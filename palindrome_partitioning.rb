# @param {String} s
# @return {String[][]}
def partition(s)
    @perms = []
    dfs(s, [])
    @perms
end

def dfs(s, path)
    if s.length == 0
        @perms << path
        return
    end
    (1..s.length).each do |i|
        if isPal(s[0...i])
            dfs(s[i..-1], path + [s[0...i]])
        end
    end
end

def isPal(s)
    s == s.reverse
end

# def partition(self, s):
#     res = []
#     self.dfs(s, [], res)
#     return res

# def dfs(self, s, path, res):
#     if not s:
#         res.append(path)
#         return
#     for i in range(1, len(s)+1):
#         if self.isPal(s[:i]):
#             self.dfs(s[i:], path+[s[:i]], res)
    
# def isPal(self, s):
#     return s == s[::-1]

# Whenever you find a new palindrome, you just add it to all the recursive solutions of the other two sides of the string ... right??
# Have to do both the first half and second half...? Like iterate over all the solutions to the first half, then add those from the second half?

# ["a", "a", "b", "b", "c", "b", "d", "a", "a"]


# def partition(s)
#     return [] if s.length == 0
#     return [[s]] if s.length == 1
    
#     perms = []
    
#     i = 0
#     check_twofer = false
#     while i < s.length - 1
#         m = i
#         n = check_twofer && i < s.length - 1 ? i + 1 : i
#         while m >= 0 && n < s.length && s[m] == s[n]
#             front_s = s[0...m]
#             back_s = s[(n + 1)..-1]
#             front_perms = partition(front_s)
#             back_perms = partition(back_s)

#             if front_perms.empty?
#                 if back_perms.empty?
#                     perms << [s[m..n]]
#                 else
#                     back_perms.each do |bp|
#                         new_perm = [s[m..n]] + bp
#                         perms << new_perm
#                     end
#                 end
#             else
#                 if back_perms.empty?
#                     front_perms.each do |fp|
#                         new_perm = fp + [s[m..n]]
#                         perms << new_perm
#                     end
#                 else
#                     front_perms.each do |fp|
#                         back_perms.each do |bp|
#                             new_perm = fp + [s[m..n]] + bp
#                             perms << new_perm
#                         end
#                     end
#                 end
#             end

#             m -= 1
#             n += 1
#         end
#         if check_twofer
#             check_twofer = false
#             i += 1
#         else
#             check_twofer = true
#         end
#     end
    
#     perms
# end