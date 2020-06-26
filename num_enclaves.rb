# @param {Integer[][]} a
# @return {Integer}
def num_enclaves(a)
    @seen = Array.new(a.length) { Array.new(a[0].length, false) }
    total = 0
    
    a.each_with_index do |row, r|
        row.each_with_index do |col, c|
            @curr_count = 0
            @usable = true
            dfs(a, r, c)
            total += @curr_count if @usable
        end
    end
    
    total
end

def dfs(a, r, c)
    return if @seen[r][c] || a[r][c] == 0
    @seen[r][c] = true
    @curr_count += 1
    @usable = false if r == 0 || c == 0 || r == a.length - 1 || c == a[0].length - 1
    
    top = r > 0 ? [r - 1, c] : nil
    right = c < a[0].length - 1 ? [r, c + 1] : nil
    bottom = r < a.length - 1 ? [r + 1, c] : nil
    left = c > 0 ? [r, c - 1] : nil
    
    [top, right, bottom, left].each do |p|
        dfs(a, p[0], p[1]) if p
    end
end