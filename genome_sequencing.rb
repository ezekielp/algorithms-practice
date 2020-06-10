# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

@subsequences = []
n = gets.to_i
n.times do
    subseq = gets.chomp
    @subsequences << subseq
end

@res = Float::INFINITY

def permutations(remaining_subsequences, combos = [])
    if remaining_subsequences.empty?
        res = combos.reduce { |acc, el| el.length < acc.length ? el : acc }
        @res = res.length if res.length < @res
        return
    end

    if combos.empty?
        if remaining_subsequences.length == 1
            return remaining_subsequences[0].length
        end

        i = 0
        while i < remaining_subsequences.length - 1
            j = i + 1
            while j < remaining_subsequences.length
                s1 = remaining_subsequences[i]
                s2 = remaining_subsequences[j]
                new_combos = helper(s1, s2)
                new_subsequences = remaining_subsequences - [s1, s2]
                permutations(new_subsequences, new_combos)
                j += 1
            end
            i += 1
        end
    else
        remaining_subsequences.each do |s1|
            new_combos = []
            combos.each do |s2|
                new_combos += helper(s1, s2)
            end
            new_subsequences = remaining_subsequences - [s1]
            permutations(new_subsequences, new_combos)
        end
    end
end

def helper(s1, s2)
    return [new_combos] if s1 == s2

    res = []
    forward, reverse = false

    until forward && reverse
        to_add = []

        m = s1.length - 1
        n = 0
        while m > 0
            m_prev = m
            while s1[m] && s2[n] && s1[m] == s2[n]
                m += 1
                n += 1
            end
            
            if m == s1.length
                to_add << s1[0...m_prev] + s2
            elsif n == s2.length
                to_add << s1
            end

            n = 0
            m = m_prev - 1
        end

        if to_add.empty?
            to_add << s1 + s2
        end

        res += to_add

        if !forward
            forward = true
            s1, s2 = s2, s1
        else
            reverse = true
            s1, s2 = s2, s1
        end
    end

    return res
end

permutations(@subsequences)

puts @res
