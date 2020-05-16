# @param {Integer[]} arr
# @return {Integer[]}
def replace_elements(arr)
    max = arr[-1]
    arr[-1] = -1
    
    idx = arr.length - 2
    while idx >= 0
        n = arr[idx]
        arr[idx] = max
        max = n if n > max
        idx -= 1
    end
        
    arr
end


