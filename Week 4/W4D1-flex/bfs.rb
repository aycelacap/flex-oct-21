# Breadth first search
# what data structure does it have?
# FIFO
# slower than dfs 
# is it recursive? - not recursive

def bfs(node, target) # node is root 
  queue = [node]

  until queue.empty?
    current_node = queue.shift
    if current_node.value == target
      return current_node
    end

    current_node.children.each do |child|
      queue << child
    end
  end
  nil
end


# Queue - data structure to find the shortest path
# first in first out
# slower than depth first search 
# considers all neighbors first 
# siblings rather than children