function SumFibEvenNum()
{
	var range = 4000000;
	var f1=1, f2=1, sum =0, result=0;
	  while(sum < range)
	  {
		if(sum % 2 == 0)
		  result+=sum;
		sum = f1 +f2;
		f2 = f1;
		f1 = sum;
	  }
  return result;
}
function SumFibEvenNumRec(x, m)
{
	m = m ||{};
	if(m[x])return m[x];
	if(x<=1)
		return 1;
	return m[x] = SumFibEvenNumRec(x-1, m) + SumFibEvenNumRec(x-2, m);
	
	
}
function FindLargePrimeFactor()
{
	var num = 600851475143;
	
	var largestPrime =0;
	for(var i=2; i<=num;i++)
	{
		if(num%i ==0){
			largestPrime = i;
			num = num/i;
		}
		if(largestPrime > num )
		{
			return largestPrime;
		}
		
	}
	
}

function maxChar(x)
{
	 let hashMap = {};
	 for(let i =0;i<x.length;i++)
	 {
	   if(hashMap[x[i]] != undefined)
			hashMap[x[i]] += 1;
		else
			hashMap[x[i]] = 1;
	 }
	let max =  Math.max.apply(Math, Array.from(Object.values(hashMap)));
	let value = Object.keys(hashMap).find(key => hashMap[key] === max)
	
	return value;
 }

function TwoSum(array, target)
{
 let mymap = new Map();
  for(let i = 0; i<array.length; i++)
  {
   let tval = target - array[i];
	if(array.includes(tval) &&  i != array.indexOf(tval))
	{
		mymap.set(i, array[i]);		
		mymap.set(array.indexOf(target-array[i]), target-array[i]);
		break;
	}
	
  }
  return Array.from(mymap.keys());
  
  
 
}
function MajorityEle(A){

let count = 1;
let first = A[0];
for(let i =1; i<A.length; i++)
{
	if(first == A[i])
	{	
		 count ++;
		 if(count > Math.floor(A.length/2))
		 {
			return A[i]+ "which occurs" + count + "times which is greater than" +  Math.floor(A.length/2) ;
		 }
	}else
	{
		
		first = A[i];
	}
}
return A;

}
function powerSet(arr) {
  
  // the final power set
  var powers = [];
  
  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);
  
  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {
    
    // our set that we add to the power set
    var tempSet = [];
    
    // convert the integer to binary
    var num = i.toString(2);
    
    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) { num = '0' + num; }
    
    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
      if (num[b] === '1') { tempSet.push( arr[b]); }    
    }
    
    // add this set to the final power set
    powers.push(tempSet);
    
  }
  
  return powers;
  
}
function mergeIntervals(nums)
{
	let result =[], last;
	nums.forEach(function(n){
		if(!last || n[0] > last[1])
			result.push(last = n);
		else if(n[1] > last[1])
			last[1] = n[1];
			
			
	});
	return result;

}
function mergeIntervalsStack(nums)
{
	if(nums.length <=1)
		return nums;
	let stack =[],top;
	
	//start the loop and merge if needed
	for(let i = 0; i < nums.length; i++ )
	{		
		top = stack[stack.length];
		stack.push(findInterval(nums[i], top));	
		
		
	}

	return stack;


}
function findInterval(nums, top)
{
	let stack = [];
	if(!top || top[1] < nums[0] )
		stack.push([nums]);
	else if(top[1] > nums[1])
	{
		top[1] = nums[1];
		stack.pop();
		stack.push(top);
	}	
	return stack;
}

////find the middle of the linked list 
//define node class
function node(data, next)
{
  this.data = data;
  this.next = next;
}
function linkedList(){
  this.head = null;
}
linkedList.prototype.push = function(val)
{
  let node = {
    data: val,
	next: null
  }
  if(!this.head)
	this.head = node;
  else
  {
    current = this.head;
	while(current.next){
	  current = current.next;
	}
    current.next = node;
  }
}
/*const list = new linkedList();
list.push(235);
list.push(245);
list.push(123);
list.push(5);
list.push(7);*/

const list1 =new linkedList();
list1.push(2);
list1.push(4);
list1.push(3);

const list2 = new linkedList();
list2.push(5);
list2.push(6);
list2.push(4);
function findMidLinkedList(x)
{
  let fp = list.head;
  let sp = list.head;
  while(fp.next !== null && fp.next.next !== null)
  {
    fp = fp.next.next;
	sp = sp.next;
  }
  return sp.data;
}
function addTwolists(l1, l2)
{
  let sum = 0;
  let carry = 0;
  l1 = l1.head;
  l2 = l2.head;
  let current = new node(0);
  while(l1.next!== null && l2.next!== null)
  {
    sum = l1.data + l2.data + carry;
	carry = parseInt(sum /10);
	current.next = new node(parseInt(sum%10));
	current = current.next;
	l1 = l1.next;
	l2 = l2.next;
  }
  if(carry > 0)
  {
    current.next = new node(carry);
  }
  return current.next;
}

function rotateArray(x)
{
    let low = 0;
    let n = x.length;
    let high = n-1;
    while(low <= high)
     {
          let mid = low +high/2;
          //set the pivots
          let prev = (mid+(n-1)) % n;
          let next = mid + n % n;
          //check where mid <= next
          if(x[mid] <= x[next] && x[mid] <= x[prev])
			return mid;
          if(x[mid] <= x[high])
			high = mid -1;
          if(x[mid] >= x[low])
			low = mid +1;
     }
     return -1;
   
}
function ThreeSum(arr) { 

  // code goes here  
  let result = [];
  let low = 0;
  let high = arr.length-1;  
  let sum;
  for(let i = 1;i<arr.length;i++)
  {
    let mid = (low+high)/2;
	let j = i+1;
	let k = mid;
	while (j<=k)
	{
		sum = arr[i]+arr[j]+arr[k];
		if(sum === arr[0])
		{
			result.push([arr[i],arr[j],arr[k]]);
			return true;
		}else if(j == k)
		{
			k = high; 			
		}
		j++;
		k--;
	}
  
  }
  return false; 
         
}
var isNumber = function(s) {
   let str = "";
   s = s.trim();
    for(i in s)
	{
		if(s[i] >= '0' && s[i] <= '9')
		{
			str+=s[i];
		}else if(s[i] === 'e' && s[0] !== 'e'  && i != s.length-1 && !str.includes(s[i])){
			str+=s[i];
		}else if(s[i] == '.' && str[i-1] !== 'e' && str[i-1] !== '.' && s[i-2] !== 'e' && !str.includes(s[i]) )
		{
			str+=s[i];
		}
		else if(s[0] == '+' && i == 0  || s[0] == '-' && i ==0 )
		{
			str+=s[i];
		}
		
		else{
		return false;
		
		}
		
	}
	let result = parseFloat(str) !== NaN ? true : false;
	return result;
	
	//return !isNaN(s);
};
//it is not coming 
var myPow = function(x, n) { 	

	if (x === 1 || n === 0) return 1;

    if (n < 0) {
        n = -n;
        x = 1/x;
    }

    let res = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            res *= x;
            --n;
        }
        x *= x;
        n /= 2;
    }

    return res;
    
};
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }
var trimBST = function(root, L, R) {

	if(root == null)
		return root;
   if(root.val > R) return trimBST(root.left, L, R);
	 if(root.val < L) return trimBST(root.right, L, R);

	 root.left = trimBST(root.left, L, R);
	 root.right = trimBST(root.right, L, R);
	 return root;
};


var islandPerimeter = (grid) => {
  let islands = 0;
  let neighbors = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length ; j++) {
      if (grid[i][j]) {
        islands++;
				//this will check down cell
        if (i < grid.length - 1 && grid[i + 1][j]) neighbors++;
				//next cell
        if (grid[i][j + 1]) neighbors++;
      }
    }
  }
  return islands * 4 - neighbors * 2;
};

var fizzBuzz = function(n) {
	let result = [];
    for(let i=1;i<=n;i++)
		{
			if(i%3 ==0 && i%5 ==0)
				result.push("FizzBuzz");
			else if(i%3 ==0)
				result.push("Fizz");
			else if(i%5 ==0)
				result.push("Buzz");
			else
				result.push(i.toString());

		}
		return result;
};
