// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = letters.reduce((a, c) => a + c)
//https://www.lennu.net/javascript-reduce-with-string-concatenation-example/
// The below line should console.log: "hello"
console.log(greeting) 

// 2 - uncomment lines 9 and 11
const numbers = [ 100, 3, 4, 1, 2];
const total = numbers.reduce(function(previous, current, index, array) {
  return previous * current;
})
// The below line should console.log: 2400
console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
const flattenedArray = arrays.reduce((previous, current) => {
  return previous.concat(current);
});
// The below line should console.log: ["how", "now", "brown", "cow"]
console.log(flattenedArray);