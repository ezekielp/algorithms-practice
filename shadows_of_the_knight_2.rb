# https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-2

STDOUT.sync = true # DO NOT REMOVE
# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# w: width of the building.
# h: height of the building.
w, h = gets.split(" ").collect {|x| x.to_i}
n = gets.to_i # maximum number of turns before game over.
x0, y0 = gets.split(" ").collect {|x| x.to_i}

# game loop
loop do
    bomb_dir = gets.chomp # Current distance to the bomb compared to previous distance (COLDER, WARMER, SAME or UNKNOWN)
    
    # Write an action using puts
    # To debug: STDERR.puts "Debug messages..."
    
    puts "0 0"
end


# Set up two hashes for rows and columns
# Each hash entry would have a min width/height and a max width/height that would be continuously updated as you search
# 


