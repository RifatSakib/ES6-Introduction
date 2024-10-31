// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.


//filter and find er majhe kisu parthokko ase, filter condition mille sob gulo element ekta array er maddhome dibe, condition na mille ekta empty array dibe but find condition milleo shudhu matro prothom element ta dibe ebong shudhu value tai dibe kono array dibe na ,condition na mille undefied dibe


const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1)
console.log(selected)

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)