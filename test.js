
	var assert = chai.assert;
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
	
