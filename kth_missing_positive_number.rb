# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def find_kth_positive(arr, k)
    i = 0
    n = 1
    j = 0

    while j < k
        if i < arr.length
            if arr[i] == n
                i += 1
            else
                j += 1
            end
            n += 1
        else
            n += (k - j)
            j = k
        end
    end
    
    n - 1
end

