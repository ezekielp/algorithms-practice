# This was the question:

# There's a faulty keyboard which types a space whenever key 'e' is hit.

# Location: US
# Position: SWE at Google

# Given a string which is the sentence typed using that keyboard and a dictionary of valid words, return all possible correct formation of the sentence.

# Example:

# Input: s = "I lik   to   xplor   univ rs ", dictionary  = {"like", "explore", "toe", "universe", "rse"}

# ["0$0, 2$4, 7$8"]

# Output:
# ["I like to explore universe",
# "I like toe xplor  universe",
# "I like to explore univ rse",
# "I like toe xplor  univ rse"]
# There are two spaces after "lik", "to" and before "univ" in the sentence indicating one is actual space and another one is resulted by hitting key 'e'.

def possible_formations(str, dic)

    word_indices = []

    i = 0
    until i == str.length
        start = nil
        finish = nil
        if str[i] != " "
            start = i
            j = i
            until str[j] == " " || j == str.length
                j += 1
            end
            finish = j - 1
            word_indices << "#{i}$#{j}"
        else
            i += 1
        end
    end

    
    word_indices



end


    # words = []
    # word1 = nil
    # word2 = nil
    
    # i = 0
    # until i == str.length
    #     if str[i] == " "
    #         k = i
    #         num_extra_spaces = 0
    #         while str[k] == " "
    #             num_extra_spaces += 1
    #             k += 1
    #         end

    #         if i > 0 && word1 == nil
    #             j = i - 1
    #             word1 = [str[j]]
    #             while j >= 0 && str[j] != " "
    #                 w1.unshift(str[j])
    #                 j -= 1
    #             end
    #             word1 = word1.join("")
    #         end

    #         if i < str.length
    #             j = i + 1
    #             word2 = [str[j]]
    #             while j < str.length && str[j] != " "
    #                 w2 << str[j]
    #                 j += 1
    #             end
    #             word2 = word2.join("")


    #         end

    #         if word1

    #         end


    #     else
    #         i += 1
    #     end
        
    # end

    # formations

