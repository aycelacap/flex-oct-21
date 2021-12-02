class Card
  attr_reader :value

  def initialize(value, revealed = false)
    @value = value
    @revealed = revealed
  end

  def hide
    @revealed = false
  end

  def reveal
    @revealed = true
  end

  def revealed?
    @revealed
  end
end