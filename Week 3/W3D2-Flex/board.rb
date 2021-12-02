require_relative 'card'

class Board
  attr_reader :size, :grid
  
  def initialize(size = 4)
    @grid = Array.new(size) { Array.new(size) }
    @size = size
    populate
  end

  def [](pos)
    row, col = pos
    grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    grid[row][col] = value
  end

  # Let's build populate
  # First we'll write some pseudocode

end