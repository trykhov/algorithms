# Diameter of Binary Tree

Leetcode: https://leetcode.com/problems/diameter-of-binary-tree/

## Problem
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

## Example

`Input`:

          1
         / \
        2   3
       / \     
      4   5    

`Output`: `3` because the distance from node 4 (or 5) to 3 is  `3`.


## Approach & Intuition

From a glance, it seems like the longest path is usually the path that starts from one side of the root to the other. However, while the path may not necessarily pass through the root, using this thought can help us.

Let's look at this:

        -7
        / \
      -6  -8
      /   /
     5   9
        /
       -1

It's clear that if we run the function with an input of `7` as the head node, we would get `5` as a result because from the leaf node `5` on the left side to the leaf node `-1` on the right side, the `longest distance: 5`. 

Now suppose that `-7` was a subtree and we had something more complex such as:

                        4
                      /   \
                    -7    -3
                          /  \
                        -9   -3
                       /  \
                      9    -7
                     /    /  \
                    8    -6   -8
                   / \   /    /
                  0   6  5   9
                 /     /    /
                -1    4   -2


The solution for this would be `8` because from the left of -1 to the leaf of -2, it would be a distance of 8. 

`Path: [-1,0,8,9,-9,-7,-8,9,-2]`

Notice that this one doesn't go through the root. In fact, if we applied the `leftHeight + rightHeight` idea on the node, we would actually get a result of 7. But we still use the `leftHeight + rightHeight` idea for when we run the function on the subtree with `-9` as a head. So this tells us that as we're traversing the tree, we should keep track of the longest distance and update it constantly.

## Code

We're going to use a helper function, `longestSide()`, to help us determine the longest side of a given node.

JavaScript:

    var diameterOfBinaryTree = function(root) {
        
        if(root === null) return 0;
        // will be a global variable that allows helper function to update
        let longestDiameter = 0;
        
        function longestSide(root) {
            // if root doesn't have children, we want the path to be 0
            if(root === null) return -1;
            let leftSide = longestSide(root.left) + 1;
            let rightSide = longestSide(root.right) + 1;
            // the longest diameter is the leftSide + rightSide of a node
            // update the global variable
            longestDiameter = Math.max(longestDiameter, leftSide + rightSide)
            // return the longest side of a node and use it to calculate longestDiameter
            return Math.max(leftSide, rightSide);
        };
        
        // traverse the tree
        longestSide(root);
        return longestDiameter;
    }

`Runtime: O(n)` (`n` is the number of nodes on the tree)

`Space: O(n)`