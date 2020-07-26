# @param {Integer[][]} matrix
# @return {Integer[][]}
def pacific_atlantic(matrix)
    ap = []
    matrix.length.times { |i| ap << Array.new(matrix[0].length, "")}
    
    (0...matrix.length).each do |i|
        ap[i][0] = "P"
        ap[i][matrix[0].length - 1] = "A"
    end
    (1...(matrix[0].length - 1)).each do |i|
        ap[0][i] = "P"
        ap[matrix.length - 1][i] = "A"
    end
    ap[0][matrix[0].length - 1] = "AP"
    ap[matrix.length - 1][0] = "AP"
    # p ap
    
    matrix.each_with_index do |row, r|
        row.each_with_index do |col, c|
            dfs(ap, matrix, "pacific", r, c)
        end
    end
    
    i = matrix.length - 1
    while i >= 0
        j = matrix[0].length - 1
        while j >= 0
            dfs(ap, matrix, "atlantic", i, j)
            j -= 1
        end
        i -= 1
    end
    p ap
    
    res = []
    
    ap.each_with_index do |row, r|
        row.each_with_index do |col, c|
            if col == "AP" || col == "PA"
                res << [r, c]
            end
        end
    end
    
    res
    
end

def dfs(ap, matrix, dir, r, c)
    return if ap[r][c] == "AP" || ap[r][c] == "PA"
    
    if dir == "pacific"
        if ap[r][c] == "P"
            return
        else
            if (ap[r - 1][c] == "P" && matrix[r - 1][c] <= matrix[r][c]) || (ap[r][c - 1] == "P" && matrix[r][c - 1] <= matrix[r][c])
                if ap[r][c] == "A"
                    ap[r][c] = "AP"
                else
                    ap[r][c] ="P"
                end
            end
        end
    else
        if ap[r][c] == "A"
            return
        else
            if (ap[r + 1][c] == "A" && matrix[r + 1][c] <= matrix[r][c]) || (ap[r][c + 1] == "A" && matrix[r][c + 1] <= matrix[r][c])
                if ap[r][c] == "P"
                    ap[r][c] = "AP"
                else
                    ap[r][c] ="A"
                end
            end
        end
    end
end

