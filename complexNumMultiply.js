/*Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
Note:

(a+ib) * (x+iy)=ax+i^2by+i(bx+ay)=ax-by+i(bx+ay)
The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.*/

var complexNumberMultiply = function(a, b) {
  let regex = /[+|i]/
  let x = a.split(regex);//  /[\s,]+/
  let y = b.split(regex);

  let aReal = parseInt(x[0],10);
  let bReal = parseInt(y[0],10);
  let aImg = parseInt(x[1],10);
  let bImg = parseInt(y[1],10);
console.log(aImg,bImg,x,y);

  return (aReal * bReal - aImg * bImg) + "+" +  (aReal * bImg + aImg * bReal) + "i";
};

let str1 = "1+0i";
let str2 = "1+0i";
console.log(complexNumberMultiply(str1, str2));
