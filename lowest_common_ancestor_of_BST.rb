# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {TreeNode} p
# @param {TreeNode} q
# @return {TreeNode}
def lowest_common_ancestor(root, p, q)
    curr = root.val
    if p.val < curr && q.val < curr
        lowest_common_ancestor(root.left, p, q)
    elsif p.val > curr && q.val > curr
        lowest_common_ancestor(root.right, p, q)
    else
        return root
    end
end
