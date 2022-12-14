/* Declarative programming is all about hiding away complexity and bringing programming languages 
closer to human language and thinking. It's the direct opposite of imperative programming in 
the sense that the programmer doesn't give instructions about how the computer should execute the task, 
but rather on what result is needed*/

const nums = [1, 4, 3, 6, 7, 8, 9, 2];

console.log(nums.filter((num) => num > 5)); // Output: [ 6, 7, 8, 9 ]
