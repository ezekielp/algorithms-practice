# @param {String} num1
# @param {String} num2
# @return {String}
def add_strings(num1, num2)
    res = []
    carry = 0
    
    larger_n = num1.length > num2.length ? num1 : num2
    
    rn1 = num1.reverse
    rn2 = num2.reverse
    
    i = 0
    while i < larger_n.length
        d1 = rn1[i] ? rn1[i].ord - 48 : 0
        d2 = rn2[i] ? rn2[i].ord - 48 : 0
        
        pre_sum = d1 + d2 + carry

        if pre_sum > 9
            carry = 1
            pre_sum -= 10
        else
            carry = 0
        end
        
        res.unshift(pre_sum.to_s)
       
        i += 1
    end

    if carry == 1
        res.unshift('1')
    end
    
    res.join("")
    
end

# '949'
# '786'

