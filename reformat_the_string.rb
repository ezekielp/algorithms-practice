# @param {String} s
# @return {String}
require 'set'

def reformat(s)
    chars = []
    digits = []
    alphabet = Set.new(("a".."z").to_a)
    
    s.each_char do |c|
        if alphabet.include?(c)
            chars << c
        else
            digits << c
        end
    end
    
    res = ""
    
    if chars.length > digits.length + 1 || digits.length > chars.length + 1
        return res
    end
    
    push_a_char_next = chars.length + 1 == digits.length ? false : true
    
    until chars.empty? && digits.empty?
        if push_a_char_next
            res << chars.pop
            push_a_char_next = false
        else
            res << digits.pop
            push_a_char_next = true
        end
    end
    
    res
    
end