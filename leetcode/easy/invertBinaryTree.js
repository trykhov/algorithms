var invertTree = function(root) {
    if(root === null) return null;
    let leftSide = root.left;
    let rightSide = root.right;
    root.left = rightSide;
    invertTree(root.left);
    root.right = leftSide;
    invertTree(root.right);
    return root;
};