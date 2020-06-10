# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# class Trie
#     attr_reader :trie

    # def initialize
    #     @trie = {}
    # end

    # def add(str)
    #     current = @trie
    #     str.each_char do |c|
    #         current[c] = {} unless current[c]
    #         current = current[c]
    #     end
    #     current[nil] = true
    # end

    # def [](char)
    #     @trie[char]
    # end

    # def word_present?(str)
    #     current = @trie
    #     str.each_char do |c|
    #         return false unless current[c]
    #         current = current[c]
    #     end
    #     current[nil]
    # end

    # def prefix_present?(str)
    #     current = @trie
    #     str.each_char do |c|
    #         return false unless current[c]
    #         current = current[c]
    #     end
    #     true
    # end

# end

# trie = Trie.new()

@trie = {}

def add(str)
    current = @trie
    str.each_char do |c|
        current[c] = {} unless current[c]
        current = current[c]
    end
    current[nil] = true
end


l = gets.chomp
n = gets.to_i
n.times do
    w = gets.chomp
    add(w)
end

@total = 0

@dict = {
    ".-" => "A",
    "-..." => "B",
    "-.-." => "c",
    "-.." => "D",
    "." => "E",
    "..-." => "F",
    "--." => "G",
    "...." => "H",
    ".." => "I",
    ".---" => "J",
    "-.-" => "K",
    ".-.." => "L",
    "--" => "M",
    "-." => "N",
    "---" => "O",
    ".--." => "P",
    "--.-" => "Q",
    ".-." => "R",
    "..." => "S",
    "-" => "T",
    "..-" => "U",
    "...-" => "V",
    ".--" => "W",
    "-..-" => "X",
    "-.--" => "Y",
    "--.." => "Z",
}

def dfs(trie, morse_seq)
    dfs_again = false
    if trie[nil]
        if morse_seq.empty?
            @total += 1
        else
            dfs_again = true
        end
    end

    len = [4, morse_seq.length].min
    seq = ""

    i = 0
    while i < len do
        seq += morse_seq[i]
        char = @dict[seq]
        if char
            if trie[char]
                dfs(trie[char], morse_seq[(i + 1)..-1])
            end
            if dfs_again && @trie[char]
                dfs(@trie[char], morse_seq[(i + 1)..-1])
            end
        end

        i += 1
    end
end

dfs(@trie, l)

# Write an answer using puts
# To debug: STDERR.puts "Debug messages..."

puts @total.to_s