const nums = [1, 4, 3, 6, 7, 8, 9, 2];

function filterNums() {
  const result = []; // Internal variable

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i]);
  }

  return result;
}

console.log(filterNums()); // Output: [ 6, 7, 8, 9 ]

///It's almost the same code, but we wrap our iteration within a function,
//in which we also store the result array. In this way, we can assure the function doesn't
//modify anything outside its scope. It only creates a variable to process its own information,
//and once the execution is finished, the variable is gone too.
