class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs?(pegs_arr)
    pegs_arr.all? { |peg| POSSIBLE_PEGS.include?(peg.upcase)}
  end

  def self.random(length)
    pegs = Array.new(length) { POSSIBLE_PEGS.keys.sample }
    Code.new(pegs)
  end

  def self.from_string(pegs_str)
    pegs = pegs_str.split("").map {|peg| peg = peg.upcase}
    Code.new(pegs)
  end

  attr_reader :pegs

  def initialize(pegs)
    if Code.valid_pegs?(pegs)
      @pegs = pegs.map {|peg| peg.upcase}
    else
      raise "Invalid Entry. Usable pegs are RGBY"
    end
  end

  def [](idx)
    @pegs[idx]
  end

  def length
    @pegs.length
  end

  def num_exact_matches(code_guess)
    count = 0
    code_guess.pegs.each_with_index { |peg, idx| count += 1 if self.pegs[idx] == peg }
    count
  end

  def num_near_matches(code_guess)
    # let's solve this together

  end

  def ==(code)
    self.pegs == code.pegs
  end

end
