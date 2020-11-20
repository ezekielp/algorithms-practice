class NumMatrix

  =begin
      :type matrix: Integer[][]
  =end
      def initialize(matrix)
          @orig_matrix = matrix
          @cum_sums = Array.new(matrix.length) { Array.new(matrix[0].length, 0) }
          @cum_sums.each_with_index do |row, i|
              row.each_with_index do |col, j|
                  if i == 0
                      if j == 0
                          @cum_sums[i][j] = @orig_matrix[i][j]
                      else
                          @cum_sums[i][j] = @orig_matrix[i][j] + @cum_sums[i][j - 1]
                      end
                  else
                      if j == 0
                          @cum_sums[i][j] = @orig_matrix[i][j] + @cum_sums[i - 1][j]
                      else
                          @cum_sums[i][j] = @orig_matrix[i][j] + @cum_sums[i][j - 1] + @cum_sums[i - 1][j] - @cum_sums[i - 1][j - 1]
                      end
                  end
              end
          end
      end
  
  =begin
      :type row1: Integer
      :type col1: Integer
      :type row2: Integer
      :type col2: Integer
      :rtype: Integer
  =end
      def sum_region(row1, col1, row2, col2)
          if row1 == row2 && col1 == col2
              return @orig_matrix[row1][col1]
          end
          
          if col1 == 0
              return @cum_sums[row2][col2]
          elsif row1 == 0 # && col1 != 0
              return @cum_sums[row2][col2] - @cum_sums[row2][col1 - 1]
          else # col1 != 0 && row1 != 0
              return @cum_sums[row2][col2] - @cum_sums[row1 - 1][col2] - @cum_sums[row2][col1 - 1] + @cum_sums[row1 - 1][col1 - 1]
          end
      end
  
  
  end
  
  # Your NumMatrix object will be instantiated and called as such:
  # obj = NumMatrix.new(matrix)
  # param_1 = obj.sum_region(row1, col1, row2, col2)