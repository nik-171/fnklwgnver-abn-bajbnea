function changeElem(initialArray, transformFunction) {
    if (!Array.isArray(initialArray) || !initialArray.every(num => typeof num === 'number')) {
        throw new Error('Первый аргумент должен быть массивом чисел');
    }

    if (typeof transformFunction !== 'function') {
        throw new Error('Второй аргумент должен быть функцией');
    }

    const modifiedArray = initialArray.map(transformFunction);

    return {
        initial: [...initialArray], 
        modified: modifiedArray
    };
}


const data = [1, 2, 3, 4];
const half = number => number / 2;
const result = changeElem(data, half);

console.log(result);

module.exports = { changeElem };