def dfs(node, target)
    return node if node.value == target

    node.children.each do |child|
        search_res = dfs(child, target)
        return search_res if search_res != nil
    end
    
    nil
end