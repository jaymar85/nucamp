// We have discussed the while loop and the do while loop. 

// initialization statement
// stopping condition
// iteration statement

// While loop
// let index = 0; 
// while (index <= 5) {
//     console.log(index);
//     index += 1;
// }

// Do...While loop
// let j = 0  
// do {
//     console.log(j)
//     j += 1;         
// } while (j <= 5)    

// For loops
// for(let i = 0; i < 10; i++) {
//     // if (i >= 5) { 
//     //     break;
//     // }
//     if (i % 2 === 0) {
//         console.log('evens', i);
//         continue;
//     }
//     console.log(i);
// }

// let x = 5;                                   
// for (let i = 1; i <= 3; i++) {                                            
//     x = x * i;                                                
//     console.log(x);                                   
// }

// For Loops with arrays
let colorsArray = ['red', 'blue', 'green', 'cyan']

// for (let i = 0; i < colorsArray.length; i++) {
//     console.log(i, colorsArray[i]);
// }

// for (let color of colorsArray) {
//     console.log(color);
// }

const numsArray = [2, 4, 6, 8];		

// for (let n of numsArray) {   		      
//     console.log(n * 2);		
// }

for (const char of "foobar") {
    console.log(char);
}



