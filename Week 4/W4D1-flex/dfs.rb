# Depth First Search
# what is the data structure?
# LIFO
# faster than BFS
# is dfs recursive? 


def dfs(node, target)
# base case
  return node if node.value == target

# inductive step, recursive step
  node.children.each do |child|
    possible_results = dfs(child, target)
    return possible_results if possible_results != nil # try commenting this out 
  end
  nil
end

# stack data structure
# Last in last out
# ideal to use when solutions are far from the source
# children are visited more than siblings