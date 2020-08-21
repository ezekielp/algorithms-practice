# @param {Integer} radius
# @param {Integer} x_center
# @param {Integer} y_center
# @param {Integer} x1
# @param {Integer} y1
# @param {Integer} x2
# @param {Integer} y2
# @return {Boolean}
def check_overlap(radius, x_center, y_center, x1, y1, x2, y2)
  ref = [nil, nil] # [4, 3]
    
  if x_center >= x1 && x_center <= x2
      ref[0] = x_center
  elsif x_center < x1
      ref[0] = x1
  else
      ref[0] = x2
  end
  
  if y_center >= y1 && y_center <= y2
      ref[1] = y_center
  elsif y_center < y1
      ref[1] = y1
  else
      ref[1] = y2
  end
  
  dist1 = (ref[0] - x_center).abs ** 2
  dist2 = (ref[1] - y_center).abs ** 2
  
  Math.sqrt(dist1 + dist2) <= radius    
end


# radius = 2
# x_center = 0
# y_center = 0
# [[0, 0],
#  [1, 0],
#  [1, 1],  (???)
#  [0, 1],
#  [-1, 0],
#  [-1, -1],  (???)
#  [0, -1]
#

# [[1, -1], [3, 1]]

# [
#  [1, -1],
#  [2, -1],
#  [3, -1], <<
#  [3, 0],
#  [3, 1],
#  [2, 1],
#  [1, 1], <<
#  [1, 0],
#  [],
#  [],
# ]

# []







