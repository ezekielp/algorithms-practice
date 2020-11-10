# def path_sum(root, sum, running_sum = 0)
#     # res = dfs(root, sum, 0)
#     # res == nil ? 0 : res
#     return 0 unless root
#     new_sum = root.val + running_sum
#     to_add_to_total = new_sum == sum ? 1 : 0
#     return [
#         path_sum(root.left, sum, new_sum),
#         path_sum(root.right, sum, new_sum),
#         path_sum(root.left, sum, running_sum),
#         path_sum(root.right, sum, running_sum),
#         to_add_to_total
#     ].sum
# end

# def dfs(root, sum, running_sum)
#     return 0 unless root
#     new_sum = root.val + running_sum
#     to_add_to_total = new_sum == sum ? 1 : 0
#     return [
#         dfs(root.left, sum, new_sum),
#         dfs(root.right, sum, new_sum),
#         dfs(root.left, sum, running_sum),
#         dfs(root.right, sum, running_sum),
#         to_add_to_total
#     ].sum
# end

def path_sum(root, sum)
    @count = 0
    dfs(root, sum)
    @count
end

def dfs(root, target)
    return unless root
    @count += 1 if root.val + subtotal == @target
    dfs(root.left, 0) # ()
    dfs(root.left, root.val)
    dfs(root.left, subtotal + root.val) # ()
    dfs(root.right, 0) # ()
    dfs(root.right, root.val)
    dfs(root.right, subtotal + root.val) # ()
end

def test(root, target)

end