# binary search method style

def bsearch(nums_arr, target)
  # base case 
  return nil if nums_arr.empty?

  mid = nums_arr.length / 2
  return mid if nums_arr[mid] == target

  left = nums_arr[0...mid]
  right = nums_arr[mid + 1..-1]

  if nums_arr[mid] > target
    bsearch(left, target)
  else
    potential_res = bsearch(right, target)
    if potential_res.nil?
      return nil
    else
      potential_res + mid + 1
    end
  end
end

p bsearch([1, 2, 3, 4, 5, 6, 7], 7)






































# For extra practice monkey patch binary search *cough cough
class Array
    def binary_search(target)

    end
end
