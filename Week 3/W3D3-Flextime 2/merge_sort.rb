# Merge Sort monkey patched

class Array
    def merge_sort
        return self if self.length <= 1

        pivot = self.length / 2
        left = self[0..pivot]
        right = self[pivot+1..-1]

        sorted_left = left.merge_sort
        sorted_right = right.merge_sort
        sorted_left.merge(sorted_right) # merge(sorted_left, sorted_right)
        # sorted_right.merge(sorted_left)
    end

    def merge(arr) # takes two sorted arrays and returns one sorted array
        sorted_arr = []
        # compare the first two elements in each array (self and arr)
        # shift the smaller one into sorted_arr
        # keep going until one of the arrays is empty
        until self.empty? || arr.empty?
            sorted_arr << (self[0] < arr[0] ? self.shift : arr.shift)
        end
        sorted_arr + self + arr
    end
end

p [17,4].merge_sort
p [17,39,3,12].merge_sort
p [5].merge_sort




























# For extra practice tonight write merge sort method style *cough cough
def merge_sort(arr)

end

def merge(left, right)

end
