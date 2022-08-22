// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array, name) {
    const findName=array.filter(item=>item.toUpperCase()===name.toUpperCase())
    return findName;
}

console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));

////////////////////////////

drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');

function fuzzyMatch(array, name) {
    const starts=array.filter(item=>item.substring(0,2)===name);
    return starts;

};

console.log(fuzzyMatch(drivers, 'Sa'));

/////////////////////////////

drivers.length = 0;
drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');


function matchName(array, inputName) {
    const match=array.filter(item=>item.name===inputName);
    return match
}

console.log(matchName(drivers, 'Bobby'))
