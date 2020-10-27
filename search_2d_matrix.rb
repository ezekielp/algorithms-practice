def search_matrix(matrix, target)
  return false if matrix.empty? || matrix.length == 1 && matrix[0].empty?
  left_col = matrix.map { |row| row[0] }
  row = left_col.bsearch_index do |num|
      num >= target
  end
  
  if row
      return true if matrix[row][0] == target
      return false if row == 0
      row -= 1
  else
      row = 0
  end

  result = matrix[row].bsearch do |num|
      num >= target
  end
  
  result == target
end
