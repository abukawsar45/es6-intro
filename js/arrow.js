// regular function
function addA (first, second){
    const total = first + second;
    return total
}
// variable decleare function
const addB = function add3 (first, second){
    const total = first + second;
    return total
}
// anonymous function
const addC = function (first, second){
    const total = first + second;
    return total
}
// anonymous function short version
const addD = function (first, second){
    return first+second;
}
// arrow function 
const addF = (first, second) => first + second;

const result = addF (30,49);
console.log(result)