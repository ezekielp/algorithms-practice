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