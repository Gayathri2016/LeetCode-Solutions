/*
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes root1 and root2.



Example 1:

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.
Flipped Trees Diagram


Note:

Each tree will have at most 100 nodes.
Each value in each tree will be a unique integer in the range [0, 99].




 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 // Definition for a binary tree node.
 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }
var flipEquiv = function(root1, root2) {
  if(root1 == root2 )
    return true;
  if(root1 == null || root2 ==null|| root1.val !=root2.val)
     return false;
  return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) || flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
};

/*Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.



Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23


Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.*/
var rangeSumBST = function(root, L, R) {
    if(root==null)
        return 0;
    if(root.val<=R&&root.val>=L)
        return root.val+rangeSumBST(root.left,L,R)+rangeSumBST(root.right,L,R);
    else if(root.val>R)
        return rangeSumBST(root.left,L,R);
    else
        return rangeSumBST(root.right,L,R)
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res =[], stack =[];

    if(!root)
        return res;
    stack.push(root);
    while(stack.length)
        {
            let curr = stack.pop();
            res.push(curr.val);
            for(let i=curr.children.length-1;i>=0;i--)
                {
                    stack.push(curr.children[i]);
                }
        }
    return res;
    //return recursive(root, []);

};

function recursive(root, arr)
{
    arr.push(root.val);
    for(let i=0;i<root.children.length;i++)
        {
            recursive(root.children[i], arr);
        }

    return arr;
}
