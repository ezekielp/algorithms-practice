# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {Integer[]} inorder
# @param {Integer[]} postorder
# @return {TreeNode}
def build_tree(inorder, postorder)
    return nil if postorder.empty?

    root = TreeNode.new(postorder.pop) # 1
    if postorder.empty?
        return root
    end
    
    inorder_idx = inorder.index(root.val) # 1
    left_inorder = inorder[0...inorder_idx] # [2]
    right_inorder = inorder[(inorder_idx + 1)..-1] # []
    
    postorder_idx = postorder.index(right_inorder[0]) # nil
    left_postorder = postorder_idx ? postorder[0...postorder_idx] : left_inorder # []
    right_postorder = postorder_idx ? postorder[postorder_idx..-1] : [] # []
    
    root.right = build_tree(right_inorder, right_postorder) # 
    root.left = build_tree(left_inorder, left_postorder)
    
    root
end


# [1, 9, 4, 3, 15, 20, 7]
# [1, 4, 9, 15, 7, 20, 3]

# [9, 4, 3, 15, 20, 7]
# [4, 9, 15, 7, 20, 3]

# [1, 9, 3, 15, 20, 7]
# [1, 9, 15, 7, 20, 3]