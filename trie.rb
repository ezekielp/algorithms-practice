class Trie

=begin
    Initialize your data structure here.
=end
    def initialize()
        @tree = {}
    end


=begin
    Inserts a word into the trie.
    :type word: String
    :rtype: Void
=end
    def insert(word)
        i = 0
        current = @tree
        while i < word.length
            char = word[i]
            if !current[char]
                current[char] = {}
            end
            current = current[char]
            i += 1
        end
        current[nil] = true
    end


=begin
    Returns if the word is in the trie.
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        i = 0
        current = @tree
        while i < word.length
            char = word[i]
            if !current[char]
                return false
            end
            current = current[char]
            i += 1
        end
        if current[nil]
            return true
        else
            return false
        end
    end


=begin
    Returns if there is any word in the trie that starts with the given prefix.
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix)
        i = 0
        current = @tree
        while i < prefix.length
            char = prefix[i]
            if !current[char]
                return false
            end
            current = current[char]
            i += 1
        end
        true
    end


end

# Your Trie object will be instantiated and called as such:
# obj = Trie.new()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.starts_with(prefix)