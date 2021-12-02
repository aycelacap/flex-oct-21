# Merge Sort monkey patched
# Also, practice the method style *cough cough*

require 'byebug'

class Array
  def merge_sort
  # base case
  return self if count <= 1
  mid = self.length / 2

  #split the array in order to sort
  left = self[0...mid].merge_sort
  right = self[mid..-1].merge_sort

  merge(left, right)
  end

  def merge(left, right)
    sorted = []

    # works with && not ||
    # we need to use && in order for us to escape the while loop
    while !left.empty? && !right.empty?
      if left[0] > right[0]
        # shift to mutate the og array 
        sorted << right.shift
      else
        sorted << left.shift
      end
    end
    # why do we add remnants? One of the array will have a lingering element
    # take account of the array with one element left
    sorted.concat(left).concat(right)
  end

end

p [1, 2, 1, 5].merge_sort


def merge_sort(arr)

end

def merge(left, right)

end
