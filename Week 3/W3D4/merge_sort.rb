require "byebug"

# require 'byebug'
# place debuggers
# run file (ruby <file name> or in pry)
# pry cheatsheet link:
# https://fleeblewidget.co.uk/2014/05/byebug-cheatsheet/
# `quit` to exit byebug 

class Array
  def merge_sort(&prc) # Procifies the block
    return self if self.count <= 1 # arr should be self
  
    middle = self.length / 2
    left = self[0...middle]
    right = self[middle..-1]
  
    sorted_left = left.merge_sort(&prc) # mergesort is monkeypatched
    sorted_right = right.merge_sort(&prc)
    Array.merge(sorted_left, sorted_right, prc)
  end
  
  private
  def self.merge(left, right, prc) # class method
    prc ||= Proc.new { |a,b| a <=> b } # default proc, spaceship compares a and b

    result = []
    until left.empty? || right.empty?
      # 
      # debugger
      if prc.call(left[0], right[0]) <= 0
        result << left.shift # += should be <<
      else
        result << right.shift
      end
    end
  
    result + left + right
  end
end


array = [5, 4, 300, 25, 21, 26, 24]

# # without a block
p array.merge_sort

# # passing in a block 
p array.merge_sort { |a, b| b <=> a }

# def merge_sort(array)
#       return self if array.length < 2
 
#       middle = array.length / 2
 
#       left, right = self.take(middle), self.drop(middle)
#       sorted_left, sorted_right = left.merge_sort, right.merge_sort
 
#       merge(sorted_left, sorted_right)
# end
 
#   def merge(left, right)
#       merged_array = []
#       until left.empty? || right.empty? 
#       # while left.length > 0 && right.length > 0 # keep looping while elements inside both
#         merged_array << (left.first < right.first) ? left.shift : right.shift
#       end
 
#       merged_array + left + right
#   end# merge sort

# GOAL: split the arr or self (if monkey patching) in half. 
# these halves are to be sorted and resorted (recursive step)

# In a recursive function, we need base case as well as a inductive step/recursive call

# --------- monkey-patched ------------
# class Array 

# end

# p [5, 7, 3, 6, 1].merge_sort



# --------- non monkey patch -------------
# def merge_sort(arr)

# end

# arr = [5, 7, 3, 6, 1]
# p merge_sort(arr)

class Array 

  def merge_sort(&blk)
    # base case 
    return self if self.count <= 1 #self being the arr
    # return [] if self.length == 0 #self
    

    middle = self.length / 2
    left = self[0...middle]
    right = self[middle..-1]

    sorted_left = left.merge_sort(&blk)
    sorted_right = right.merge_sort(&blk)
    Array.merge(sorted_left, sorted_right, &blk)
  end

  private # anything after the private keyword is private, only meant for this class
  def self.merge(left, right, &blk) 
    blk ||= Proc.new { |a, b| a <=> b }
    # if a < b, return -1
    # if a = b, return 0
    # if a > b, return 1

    result = []
    until left.empty? || right.empty?
    # while left.length > 0 && right.length > 0 do some code
      if prc.call(left[0], right[0]) <= 0 # left[0] = 7, right[0] = 9
        result << left.shift #mutating self
      else # if a > b
        result << right.shift
      end
    end

    return result + left + right 
  end

end

array = [5, 4, 300, 25, 21, 26, 24]

# # without a block
p array.merge_sort



