# ✓ temp << word[j] modifies the temp inplace;

# ✓ temp += word[j], which is a shorthand for temp = temp + word[j], creates another object and assigns it to temp variable.

# A 1-dimensional array is also known as a flattened array.
# Write a method, flatten(data), that accepts a single argument. The
# method should take in an array of any dimension and return the flattened
# version of that array. Solve this recursively.
#   
# Hint:
#  - if the argument is not an array, then we have reached the base case
#  - look up the documentation for how to check if data is an array or not
#
# Examples:
#
# array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
# flatten(array_1)      # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
#
# array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
# flatten(array_2)      # => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
#
# flatten('base case')  # => [ 'base case' ]
#
# Another Hint:
#
# From the last example, you may be confused. We said that the method takes
# in an array as an arg, but we passed it a string?
# If data is not an array, then we can consider it as a 0-dimensional array.
#     0-dimensional array: 'some data'
#     1-dimensional array: ['some data']
#     2-dimensional array: [['some data']]
#     3-dimensional array: [[['some data']]]

  # def flatten(data)
  #   # base case -> the element is not an array, where we stop running the recursive function
  #   return [data] if !data.instance_of?(Array)
  #   return [] if data.empty?
  #   # shoveling vs concatenation
  #   # results = []
  #   flatten(data[0]) + flatten(data[1..-1])
  # end

  def flatten(data) #[1, 2, [[3, 4], [5, [6]]], [7, 8]]
    return [data] if !data.instance_of?(Array)

    results = []
    data.each do |ele|
      results += flatten(ele) # results = results + flatten(ele)
    end

    results
    p results
  end

  array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
p flatten(array_1)      # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]