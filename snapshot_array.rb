class SnapshotArray
    attr_accessor :current, :snap_id
    
=begin
    :type length: Integer
=end
    def initialize(length)
        # @current = Array.new(length, 0)
        @current = Array.new(length) { Array.new(1, 0) }
        # @snaps = {}
        @snap_id = 0
    end

# @snap_id = 0
# @current = [[0], [0], [0], [0], [0]]
# set(2, 7)  # @current = [[0], [0], [7], [0], [0]]
# snap() # @snap_id = 1
# get(1, 1) # 0
# set(3, 21) # @current = [[0], [0], [7], [0, 21], [0]]
# snap() # @snap_id = 2
# get(0, 2) # 0
# set(4, 18) # @current = [[0], [0], [7], [0, 21], [0, 0, 18]]
# snap() # @snap_id = 3
# get(3, 2) # 21


=begin
    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
    def set(index, val)
      until current[index].length > snap_id
        current[index] << current[index].last
      end
      current[index][-1] = val
    end


=begin
    :rtype: Integer
=end
    def snap()
        # snaps[snap_id] = current.dup
        @snap_id += 1
        snap_id - 1
    end


=begin
    :type index: Integer
    :type snap_id: Integer
    :rtype: Integer
=end
    def get(index, snap_id)
        # snaps[snap_id][index]
        if current[index].length < snap_id + 1
          return current[index].last
        else
          return current[index][snap_id]
        end
    end


end

# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray.new(length)
# obj.set(index, val)
# param_2 = obj.snap()
# param_3 = obj.get(index, snap_id)