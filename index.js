/*
 * Pass the tests again!
 * One test is already passing. Make sure it stays that way.
 */


const invoke = () =>
  // invoke the following function so that
  // it returns the value 0
  (() => 0)()



const helloWorld = () =>
  // rewrite the following block so
  // the string is returned
  { return "Hello World" }



const whatIsIt = () =>
  // make it true! what does void 0 equal?
  void 0 === undefined


const commaFTW = () =>
  // change one + to a comma so the
  // function returns 7
  (1, 1 + 2 + 4)



/* 
 * this test already passes;
 * keep it passing and pass another one
 * by changing the returned function
 */
const buildingBlocks = () => (
  // change the next line to use block syntax
  () => {return 'passing this test like a boss'}
)()


const writeAFunction = () => (
  // replace the empty string with a function
  // that returns any non-empty string
  () => {return 'weston is the man'}
)()


const whatDoesItDo = () =>
  // what does this function evaluate to?
  // replace the empty string your answer
  (() => {})() === undefined


const returnSomething = () =>
  // this is currently the same function as
  // the previous one; this time, make the
  // function return something
  (() => {return 42})()
  


const inlineComment = () =>
  'uncomment this line'
  // this is an inline comment 



const multiLineNoInline = () => {
  /* keep these lines commented, but
   change the syntax to a multiline comment
   and remove the inline syntax
*/ 
  return 1 + 1 
}


// that's all!

module.exports = {
  invoke,
  helloWorld,
  whatIsIt,
  commaFTW,
  buildingBlocks,
  writeAFunction,
  whatDoesItDo,
  returnSomething,
  inlineComment,
  multiLineNoInline
};