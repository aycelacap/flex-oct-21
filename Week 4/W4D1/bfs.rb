def bfs(node, target)
    queue = [node]

    until queue.empty?
        current_node = queue.shift
        return node if node.value == target
        current_node.children.each { |child| queue.push(child) }
    end

    nil
end