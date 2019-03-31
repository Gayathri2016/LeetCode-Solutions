function SumFibEvenNum() {
    var range = 4000000;
    var f1 = 1, f2 = 1, sum = 0, result = 0;
    while (sum < range) {
        if (sum % 2 == 0)
            result += sum;
        sum = f1 + f2;
        f2 = f1;
        f1 = sum;
    }
    return result;
}
function SumFibEvenNumRec(x, m) {
    m = m || {};
    if (m[x]) return m[x];
    if (x <= 1)
        return 1;
    return m[x] = SumFibEvenNumRec(x - 1, m) + SumFibEvenNumRec(x - 2, m);


}
var fibonacciCheck = function(num)
{
  let f1 = 5*num*num + 4;
  let f2 = 5*num*num - 4;

 let s1 = Math.floor(Math.sqrt(f1));
 let s2 = Math.floor(Math.sqrt(f2));

  if((s1*s1) === f1 || (s2*s2) === f2)
    return 'yes';

  return 'no';

}
function FindLargePrimeFactor() {
    var num = 600851475143;

    var largestPrime = 0;
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) {
            largestPrime = i;
            num = num / i;
        }
        if (largestPrime > num) {
            return largestPrime;
        }

    }

}

function maxChar(x) {
    let hashMap = {};
    for (let i = 0; i < x.length; i++) {
        if (hashMap[x[i]] != undefined)
            hashMap[x[i]] += 1;
        else
            hashMap[x[i]] = 1;
    }
    let max = Math.max.apply(Math, Array.from(Object.values(hashMap)));
    let value = Object.keys(hashMap).find(key => hashMap[key] === max)

    return value;
}

function TwoSum(array, target) {
    let mymap = new Map();
    for (let i = 0; i < array.length; i++) {
        let tval = target - array[i];
        if (array.includes(tval) && i != array.indexOf(tval)) {
            mymap.set(i, array[i]);
            mymap.set(array.indexOf(target - array[i]), target - array[i]);
            break;
        }

    }
    return Array.from(mymap.keys());
}
function MajorityEle(A) {

    let count = 1;
    let first = A[0];
    for (let i = 1; i < A.length; i++) {
        if (first == A[i]) {
            count++;
            if (count > Math.floor(A.length / 2)) {
                return A[i] + "which occurs" + count + "times which is greater than" + Math.floor(A.length / 2);
            }
        } else {

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
            if (num[b] === '1') { tempSet.push(arr[b]); }
        }

        // add this set to the final power set
        powers.push(tempSet);

    }

    return powers;

}
function mergeIntervals(nums) {
    let result = [], last;
    nums.forEach(function (n) {
        if (!last || n[0] > last[1])
            result.push(last = n);
        else if (n[1] > last[1])
            last[1] = n[1];


    });
    return result;

}
function mergeIntervalsStack(nums) {
    if (nums.length <= 1)
        return nums;
    let stack = [], top;

    //start the loop and merge if needed
    for (let i = 0; i < nums.length; i++) {
        top = stack[stack.length];
        stack.push(findInterval(nums[i], top));


    }

    return stack;


}
function findInterval(nums, top) {
    let stack = [];
    if (!top || top[1] < nums[0])
        stack.push([nums]);
    else if (top[1] > nums[1]) {
        top[1] = nums[1];
        stack.pop();
        stack.push(top);
    }
    return stack;
}

////find the middle of the linked list
//define node class
function node(data, next) {
    this.data = data;
    this.next = next;
}
function linkedList() {
    this.head = null;
}
linkedList.prototype.push = function (val) {
    let node = {
        data: val,
        next: null
    }
    if (!this.head)
        this.head = node;
    else {
        current = this.head;
        while (current.next) {
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

const list1 = new linkedList();
list1.push(2);
list1.push(4);
list1.push(3);

const list2 = new linkedList();
list2.push(5);
list2.push(6);
list2.push(4);
function findMidLinkedList(x) {
    let fp = list.head;
    let sp = list.head;
    while (fp.next !== null && fp.next.next !== null) {
        fp = fp.next.next;
        sp = sp.next;
    }
    return sp.data;
}
function addTwolists(l1, l2) {
    let sum = 0;
    let carry = 0;
    l1 = l1.head;
    l2 = l2.head;
    let current = new node(0);
    while (l1.next !== null && l2.next !== null) {
        sum = l1.data + l2.data + carry;
        carry = parseInt(sum / 10);
        current.next = new node(parseInt(sum % 10));
        current = current.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry > 0) {
        current.next = new node(carry);
    }
    return current.next;
}

function rotateArray(x) {
    let low = 0;
    let n = x.length;
    let high = n - 1;
    while (low <= high) {
        let mid = low + high / 2;
        //set the pivots
        let prev = (mid + (n - 1)) % n;
        let next = mid + n % n;
        //check where mid <= next
        if (x[mid] <= x[next] && x[mid] <= x[prev])
            return mid;
        if (x[mid] <= x[high])
            high = mid - 1;
        if (x[mid] >= x[low])
            low = mid + 1;
    }
    return -1;

}
function ThreeSum(arr) {

    // code goes here
    let result = [];
    let low = 0;
    let high = arr.length - 1;
    let sum;
    for (let i = 1; i < arr.length; i++) {
        let mid = (low + high) / 2;
        let j = i + 1;
        let k = mid;
        while (j <= k) {
            sum = arr[i] + arr[j] + arr[k];
            if (sum === arr[0]) {
                result.push([arr[i], arr[j], arr[k]]);
                return true;
            } else if (j == k) {
                k = high;
            }
            j++;
            k--;
        }

    }
    return false;

}
var isNumber = function (s) {
    let str = "";
    s = s.trim();
    for (i in s) {
        if (s[i] >= '0' && s[i] <= '9') {
            str += s[i];
        } else if (s[i] === 'e' && s[0] !== 'e' && i != s.length - 1 && !str.includes(s[i])) {
            str += s[i];
        } else if (s[i] == '.' && str[i - 1] !== 'e' && str[i - 1] !== '.' && s[i - 2] !== 'e' && !str.includes(s[i])) {
            str += s[i];
        }
        else if (s[0] == '+' && i == 0 || s[0] == '-' && i == 0) {
            str += s[i];
        }

        else {
            return false;

        }

    }
    let result = parseFloat(str) !== NaN ? true : false;
    return result;

    //return !isNaN(s);
};

var myPow = function (x, n) {

    if (x === 1 || n === 0) return 1;

    if (n < 0) {
        n = -n;
        x = 1 / x;
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
var increasingBST = function(root) {
    if(root ==null)
      return root;
    if(root.val < L) return increasingBST(root.right);
    root.right = increasingBST(root.right);

};
var trimBST = function (root, L, R) {

    if (root == null)
        return root;
    if (root.val > R) return trimBST(root.left, L, R);
    if (root.val < L) return trimBST(root.right, L, R);

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
};
var isSameTree = function(p, q) {
  if(p==null || q == null)
     return false
 if(p.val != q.val)
    return false

 return isSameTree(p.left, q.left)&& isSameTree(p.right, q.right)
};
var BinaryTree = function(val)
{
  this.root = null;
}
BinaryTree.prototype.insert = function (value) {

  // accepts a value and places in the tree in the correct position.

  var node = new TreeNode(value);



  function recurse(bst) {

    if (bst.value > value && bst.left === undefined) {

      bst.left = node;

    } else if (bst.value > value) {

      recurse(bst.left);

    } else if (bst.value < value && bst.right === undefined) {

      bst.right = node;

    } else if (bst.value < value) {

      recurse(bst.right);

    }

  }


  recurse(this);

}

let p = new BinaryTree(1)
let q = new BinaryTree(1)
p.insert(2)
p.insert(3)
q.insert(2)
q.insert(3)

console.log("issametree of:" + isSameTree(p, q))


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

var fizzBuzz = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            result.push("FizzBuzz");
        else if (i % 3 == 0)
            result.push("Fizz");
        else if (i % 5 == 0)
            result.push("Buzz");
        else
            result.push(i.toString());

    }
    return result;
};
var searchRotatingArray = function (nums, target, start, end) {
    if (start < end) {
        let mid = Math.round((start + end) / 2);
        if (nums[mid] == target)
            return mid;
        else {
            return Math.max(searchRotatingArray(nums, target, mid + 1, end), searchRotatingArray(nums, target, start, mid - 1));

        }
    } else if (start == end) {
        if (nums[start] == target)
            return start;
    }
    return -1;
}
var search = function (nums, target) {
    return searchRotatingArray(nums, target, 0, nums.length - 1);

};
var lengthOfLongestSubstring = function(s) {

};

var lengthOfLongestSubstring = function(s) {
    let current = '';
	let temp ='';
	let hashmap = {};
	if(s.length <2)
			 return s.length;
	for(let i =0;i<s.length;i++)
	{
		if(!temp.includes(s[i]))
		{
			temp+=s[i];
			hashmap[s[i]] = i;
		}
		else
		{
			temp = '';
			i = hashmap[s[i]];

		}
    if(current.length < temp.length)
			current = temp;
	}

	return current.length;
};
var reverseString = function(s) {
  //return s.reverse().join();
  let left=0;
  let right = s.length-1;
  let temp = '';
  while(left < right)
  {
    temp = s[left];
    s[left] = s[right];
    s[right]= temp;
    ++left;
    --right;
  }
  return s.join();
}
var list = new linkedList();
var middleNode = function(head) {
    let current = head;
    let count =0;
    while(current != null)
    {
      current = current.next;
      count+=1;
    }
    let mid = Math.floor(current/2);
    while(mid % 2 == 0)
        {
              head = current.next;
              mid--;
        }
    return head;

}
var countAndSay = function(val)
{
  let temp = '1';
  if(val == 0)
    return 1;
  for(let i=2;i<=val; i++)
  {
    let say = '';
    let count = 1;
   for(let j=1;j<temp.length;j++)
    {
      if(temp[j] === temp[j-1] && j <temp.length){
        count++;
      }
      else {
        say+= count;
        say+= temp[j-1];
        count = 1;
      }

    }
    say+=count;
    say+=temp[temp.length-1];
    temp = say;
  }
  return temp;

}
var transpose = function(A) {
  let hashMap = [];

  for(let i=0;i<A.length;i++)
  {
    for(let j=0; j<A[i].length;j++)
    {
      if(A[i][j] === undefined)
        continue;
      if(hashMap[j] === undefined)
        hashMap[j] = [];
      hashMap[j][i] = A[i][j];
    }
  }


  return hashMap;
};
var printgrid = function(grid){
  for(let i=0;i<grid.length;i++){
    console.log(grid[i].join(' '));
  }
}
var create2Dgrid = function(size)
{
  let i=size;
  const grid =[];
  while(i--) grid.push(new Array(size));
  return grid;

}
var createSpiral = function(n){
  const grid = create2Dgrid(n);
  let c = 1;
  let i = 0
  let j =0;
  let di = 0;
  let dj = 1;
  while(c <= n * n)
  {
    grid[i][j] = c++;
    if(j+dj ===n || i+di ===n || j+dj === -1||grid[i+di][j+dj])
    {
      const tempDi = di;
      di = dj;
      dj = -tempDi;
    }
    i+=di;
    j+=dj;

  }
  return grid;
}
var printSpiral = function(m)
{
	let result = [];
	let i = 0;
	let j = 0;
	let di =0;
	let dj = 1;
	let c = 1;
  let seen = new Set();
	while(c <= m.length * m[0].length)
	{
    result.push(m[i][j]);

		if(i+di === m.length || j+dj === m[0].length || j+dj === -1 || seen.has(m[i+di][j+dj]))
    {
			const temp = di;
			di = dj;
			dj = -temp;
		}
      seen.add(m[i][j]);

		i+=di;
		j+=dj;
    c++;
	}
  console.log(result);
  return result;
}
function Node(val,children) {
   this.val = val;
   this.children = children;
};
//Maximum Depth of N-ary Tree
var maxDepth = function(root) {
  let max = 1;

  if(root == null)
    return 0;
  root.children.forEach((child) => {
      max = Math.max(max, maxDepth(child));
    });

  return max+1;

};
//const singleNumber = (nums) => nums.reduce((single,element) => single^element,0)
var singleNumber = function(nums)
{
  let res= nums[0];
  for(let i = 1; i<nums.length;i++)
  {
    res= res ^ nums[i];
  }
  return res;
}
var smallestRangeI = function(A, K) {
  /*  let max = A[0];
    let min = A[0];
    for(let i=0;i<A.length;i++)
    {
      max = Math.max(max, A[i]) ;
      min = Math.min(min, A[i]) ;
    }*/
    let max = Math.max(...A) -K;
    let min = Math.min(...A) + K;
    return Math.max(0, max-min);
};
/*Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"  */
var reverseWords = function(s) {
  let temp = s.split(' ');
  let res='';
  for(let i=0;i<temp.length;i++)
  {
    for(let j=temp[i].length-1;j>=0;j--)
    {
      res+=temp[i][j];
    }
    res+=' ';
  }
  return res;
};
var subdomainVisits = function(cpdomains) {
/*  let hash = {}
  let res=[]
  cpdomains.forEach(function(str)
  {
    let temp = str.split(' ')
    let num = parseInt(temp[0])
    let domains = temp[1].split('.')
    let key = domains.pop()
    hash[key] = hash[key]?hash[key]+num:num;
    for(let i=0; i<=domains.length;i++)
    {
      key = domains.pop()+'.'+key;
      hash[key] = hash[key]?hash[key]+num: num
    }
  })
    for(let i in hash)
    {
      res.push(hash[i]+ ' ' + i)
    }


return res;*/
    var map = new Map()
    for (var item of cpdomains) {
        var urlparts = item.split(/\s|\./)
        var count = urlparts.splice(0, 1)//splicing the 0th index which means 9001 will be removed and added to count
        for (let i = urlparts.length - 1; i > 0; i--) {
            urlparts[i - 1] = urlparts[i - 1] + '.' + urlparts[i] // modifying the the array
        }
        urlparts.reduce((p, n) => p.set(n, (p.has(n) ? p.get(n) : 0)+ count*1), map)
    }
    var result = []
    map.forEach((it, k) => result.push(it + ' ' + k))
    return result

    /* let map = new Map();

    for (let cpdomain of cpdomains) {
        let values = cpdomain.split(' ');
        let count = Number(values[0]);
        let domains = values[1];

        while (domains) {
            let total = count;
            if (map.has(domains)) {
                total += map.get(domains);
            }

            map.set(domains, total);

            domains = domains.indexOf(".") === -1
                ? null
                : domains.substring(domains.indexOf(".") + 1, domains.length)
        }
    }

    let arr = [];
    for (let [domain, count] of map) {
        arr.push(count + ' ' + domain);
    }
    return arr; */
};
var findDuplicates = function(a1, a2)
{
  let res = new Set()
  a1.forEach(x=> {
    a2.forEach(y => {
      if(x == y)
       res.add(x)
    })
  })
  return res;
};
var reverseArray = function(arr)
{
  let res=[]
   for(let i=arr.length-1;i>=0;i--)
   {
       res.push(arr[i])
   }
   return res
}
function mWelcome(l,a1, a2)
{
    let res =[]
    let count = 0;
    while(count <l)
    {

      res.push(a1[count] + a2[count]);
      count++
    }
    return res;
}
console.log("mWelcome:" + mWelcome(5,[1,2,3,4,5],[4,5,3,2,10]));

console.log(reverseArray([1,2,3,4,5]))
var arr = arr.split('\n');
arr.splice(0,1);
process.stdout.write( arr.reverse().toString().split(',').join('\n'));
