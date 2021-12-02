require 'byebug'

class Board

    attr_reader :size

    def initialize(n)
        @size = n * n
        @grid = Array.new(n) {Array.new(n, :N)}
    end

    def [](pos)
        # solve using deconstruction
        # @grid[pos[0], pos[1]]
    end

    def []=(pos, val)
        #solve using deconstruction
    
    end

    def num_ships
        ship_count = 0
        @grid.each do |row|
            ship_count += row.count(:S)
        end
        ship_count
    end

    def attack(pos)
        # solve using our [] and []= methods

    end

    def place_random_ships
        ships = (size * 0.25).floor
        
        while ships > 0
            row = (0...@grid.length).to_a.sample()
            col = (0...@grid.length).to_a.sample()
            pos = [row, col]
            if self[pos] != :S
                self[pos] = :S
                ships -= 1
            end
        end
    end

    def hidden_ships_grid
        @grid.map do |row|
            row.map { |ele| ele == :S ? :N : ele}
        end
    end

    def self.print_grid(grid)
        grid.each do |row|
            puts row.join(" ")
        end
    end

    # def self.print_grid(grid)
    #     grid.each do |row|
    #         print_row(row)
    #     end
    # end

    # def self.print_row(row)
    #     row_str = ''
    #     (0...row.length).each do |idx| 
    #         if idx == (row.length - 1)
    #             row_str = row_str + "#{row[idx]}"
    #         else
    #             row_str = row_str + "#{row[idx]} "
    #         end
    #     end
    #     puts row_str
    # end

    def cheat 
        Board.print_grid(@grid)
    end

    def print 
        Board.print_grid(self.hidden_ships_grid)
    end
end
