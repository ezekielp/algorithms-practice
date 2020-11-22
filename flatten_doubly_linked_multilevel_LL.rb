# Definition for a Node.
# class Node
#     attr_accessor :val, :prev, :next, :child
#     def initialize(val=nil, prev=nil, next_=nil, child=nil)
#         @val = val
#         @prev = prev
#         @next = next_
#         @child = child
#     end
# end

# @param {Node} root
# @return {Node}
def flatten(root)
  return unless root
  
  head = root
  stack = []
  while head.next || head.child || !stack.empty?
      nxt = head.next
      child = head.child
      if child
          head.child = nil
          stack << nxt if nxt
          head.next = child
          head.next.prev = head
      elsif !nxt && !child
          head.next = stack.pop
          head.next.prev = head
      end
      head = head.next if head.next
  end
  
  while head.prev
      head = head.prev
  end
  head
end


