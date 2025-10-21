const checkArray = (array, f) => Array.isArray(array) && typeof f === 'function' && array.every(f);

const data = [1, 2, 3, 4, 9, 'string', false];

const isFiniteNumber = (value) => Number.isFinite(Number(value));
const isDefined = (value) => value !== undefined;

console.log(checkArray(data, isFiniteNumber)); 
console.log(checkArray(data, isDefined));    

module.exports = { checkArray };