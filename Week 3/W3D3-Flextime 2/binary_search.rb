# binary search method style - divide and conquer
# nums_arr: sorted array
# target: number we're looking for
# return: index of target within nums_arr (OR nil if target isn't found)
def binary_search(nums_arr, target)
    return nil if nums_arr.empty?

    pivot = nums_arr.length/2
    return pivot if nums_arr[pivot] == target
    left = nums_arr[0...pivot]
    right = nums_arr[pivot+1..-1]

    if nums_arr[pivot] < target
        memo = binary_search(right, target)
        return nil if memo.nil?
        memo + pivot + 1
    else
        binary_search(left, target)
    end

end

p binary_search([1, 2, 3], 1) # => 0
p binary_search([2, 3, 4, 5], 3) # => 1
p binary_search([2, 4, 6, 8, 10], 6) # => 2
p binary_search([1, 3, 4, 5, 9], 5) # => 3
p binary_search([1, 2, 3, 4, 5, 6], 6) # => 5
p binary_search([1, 2, 3, 4, 5, 6], 0) # => nil
p binary_search([1, 2, 3, 4, 5, 7], 6) # => nil




































# For extra practice monkey patch binary search *cough cough
class Array
    def binary_search(target)

    end
end
