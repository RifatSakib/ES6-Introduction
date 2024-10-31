// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.


//filter and find er majhe kisu parthokko ase, filter condition mille sob gulo element ekta array er maddhome dibe, condition na mille ekta empty array dibe but find condition milleo shudhu matro prothom element ta dibe ebong shudhu value tai dibe kono array dibe na ,condition na mille undefied dibe


const players = [75, 65, 67, 72, 55, 59];

// const selected = players.find(player => player > 70)
const selected = players.find(player => player > 80)
console.log(selected)

/**
 * 1. map 
 * 2. forEach
 * 3. filter 
 * 4. find
 * 5. reduce
*/