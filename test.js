
	var assert = chai.assert;
	describe("subdomainVisits", function() {
		function Test(x, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(subdomainVisits(x), e, );
		});

	}
		Test(["9001 discuss.leetcode.com"], ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]);
		Test(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"], ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]);
	});
describe("reverseWords", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(reverseWords(x), e, );
	});
}
Test("Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc");
});
	describe("smallestRangeI", function() {
		function Test(x,k, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(smallestRangeI(x, k), e, );
		});
	}
	Test([1,3,6],3, 0);
});

	describe("singleNumber", function() {
		function Test(x, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(singleNumber(x), e, );
		});
	}
Test([4,1,2,1,2], 4);
});
	describe("printSpiral", function() {
		function Test(x, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(printSpiral(x), e, );
		});
	}
	let a = [[2,3,4],[5,6,7],[8,9,10],[11,12,13]]
	let b= [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];
	//Test(a, [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]);
	Test(b, [1,2,3,4,8,12,11,10,9,5,6,7]);
  Test(a, [2,3,4,7,10,13,12,11,8,5,6,9]);
});
	describe("printgrid", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(printgrid(x), e, );
		});
	}
	//let a = [[1,2],[3,4]];
	a = createSpiral(5);
	Test(a, a);
	//Test(4, false);

	});
	describe("transpose", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(transpose(x), e, );
		});
	}
  let a = [[1,4,7],[2,5,8],[3,6,9]];
	Test([[1,2,3],[4,5,6],[7,8,9]], a);
	//Test(4, false);

	});
describe("fibonacciCheck", function() {
function Test(x, e){
	it(`${x} is ${e}`, function() {
	 assert.equal(fibonacciCheck(x), e, );
	});
}
//Test(3, 21);
Test(34, true);
Test(4, false);

});
	describe("countAndSay", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(countAndSay(x), e, );
	 	});
}
	//Test(3, 21);
	Test(4, 1211);
	Test(5, 111221);
	Test(6, 312211);
});
	describe("findMidLinkedList", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(findMidLinkedList(x), e, );
	});
}

Test([1,2,3,4,5,6], [4,5,6]);
});
	describe("reverseString", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(reverseString(x), e, );
	});
}
Test(["h","e","l","l","o"], ["o","l","l","e","h"]);
});
	describe("lengthOfLongestSubstring", function() {
	function Test(x, e){
		it(`${x} is ${e}`, function() {
		 assert.equal(lengthOfLongestSubstring(x), e, );
	});
}
Test("abacabcbbbb", 'abc');
});
	describe("search", function() {
		function Test(x,r, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(search(x, r), e, );
		});
		}
		Test([4,5,6,7,0,1,2], 6, 2);
		Test([], -5, -1);
		Test([1,3], 3, 1);
		Test([5,1,3], 1, 1);
		Test([1,3], 1, 0);
		Test([1], 1, 0);
		Test([1], 0, -1);
		Test([7,8,1,2,3,4,5,6],2,3);
	});
	describe("fizzBuzz", function() {
		function Test(x, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(fizzBuzz(x), e, );
		});
	}
	Test(15, [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]);
});
	describe("islandPerimeter", function() {
		function Test(x, e){
			it(`${x} is ${e}`, function() {
			 assert.equal(islandPerimeter(x), e, );
		});
	}
	Test([[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]], 16);
});

	describe("trimBST", function() {

	 function makeTest(x, l,r, e){
		 it(`${x} is ${e}`, function() {
		  assert.equal(trimBST(x, l,r ), e, );
		});
	 }
	 makeTest([1,0,2], 1, 2, [1,, 2]);
	// makeTest([1,2,0,3,4], 1, 3, [1,null, 2]);
	});
	describe("myPow", function() {

	 function makeTest(x, n , e){
		 it(`${x} is ${e}`, function() {
		  assert.equal(myPow(x, n), e, );
		});
	 }
	 makeTest(2.00000, 10, 1024);
	 makeTest(2.00000, -2, 0.25);
	 makeTest(1.00000,2147483647, 1.0);
	 // let nums = [2, 2.00000, 2.10000, 2.00000 ];
	//  let pow =[0,10, 3,,-2];
	//  let expected = [1,1024, 9.26100, 0.25000 ];
	 // for (let x = 0; x <= nums.length; x++) {
		// makeTest(nums[x], pow[x], expected[x]);
	  // }

	});

/*	describe("isNumber", function() {

	  function makeTest(x, e) {
		let expected =e;
		if(e)
		{
		it(`${x} is ${expected}`, function() {
		  assert.isTrue(isNumber(x));
		});
		}else if(!e){
		it(`${x} is ${expected}`, function() {
		  assert.isFalse(isNumber(x));
		});
		}
	  }
	  let validnums = ["0", " 0.1 ", "2e10" ," -90e3   "," 6e-1","53.5e93"];
	  let notValid = ["abc","1 a", " 1e" ,"e3"," 99e2.5 "," --6 ","-+3","95a54e53" ];
	  //makeTest("-90e3", true);
	 for (let x = 0; x <= validnums.length; x++) {
		makeTest(validnums[x], true);
	  }
	  for (let x = 0; x <= notValid.length; x++) {
		makeTest(notValid[x], false);
	  }

	});*/
