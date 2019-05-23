
/* 350. Intersection of Two Arrays II
Easy

654

233

Favorite

Share
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
*/
var intersect = function(nums1, nums2) {
    let n1 = nums1.map(Number).sort((a,b)=>a-b);
    let n2 = nums2.map(Number).sort((a,b)=>a-b);
    let l1 = n1.length;
    let l2 = n2.length;
    let x=0;
    let y =0;
    let res = [];
    //console.log(n1, n2);
    while(!oobs(l1, l2, x, y ))
        {
            if(n1[x] === n2[y])
                {
                    res.push(n1[x]);
                    x++;
                    y++;
                }
            else if(n1[x] <n2[y])
                {
                    x++;
                }
            else
                {
                    y++;
                }
        }
    return res;

};
function oobs(l1, l2, x, y){
    return x>=l1 || y>=l2;
}
