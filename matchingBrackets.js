var arr =[];
function printParanthesis(open, close, str)
{
  if(open ===0 && close===0)
    arr.push(str);
  if(open > close)
    return;
  if(open >0)
    return printParanthesis(open-1, close, str+'(' );
  if(close > 0)
    return printParanthesis(open, close-1, str+')');
}




  let n=3;
  for(let k=1;k<=n;k++)
  {
    printParanthesis(k,k,'');
  }


console.log( arr.toString());
function printParanStack(str)
{
  let char = str.spllit('');

}

function matchingBrackets(str){
  let stack=[]
  let map = {'(':')', '{':'}', '[':']'}
  for(let i=0;i<str.length;i++)
  {
    if(str[i] === '(' || str[i]==='{' || str[i] === '[')
      stack.push(str[i])
    else {
      let last = stack.pop()
      if(str[i] !== map[last] )
        return false
    }
  }
  if(stack.length !== 0)
    return false

  return true
}

console.log(matchingBrackets("(){}")); // returns true
console.log(matchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(matchingBrackets("({(()))}}"));
