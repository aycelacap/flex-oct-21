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

  def flatten(data)
  
    return [data] if !data.is_a?(Array)
    
    flattened = []
    
    data.each { |el| flattened += flatten(el) } #concat merges vs shoveling returns a nested array
    
    flattened
    
  end
  
  # OR
  
  def flatten(data)
  
    return [data] if !data.is_a?(Array)
    
    result = []
    
    data.each do |el|
      if el.is_a?(Array)
        result += flatten(el)
      else
        result << el 
      end
    end
    result
  end

array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
p flatten(array_1)      # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
p flatten(array_2)      # => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]