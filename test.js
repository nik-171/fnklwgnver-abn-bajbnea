const assert = require('assert');
const { changeElem } = require('./1.js');
const { encodeCards } = require('./2.js');
const { checkArray } = require('./3.js');
const { fromMillenium } = require('./4.js');

(function testChangeElem() {
    const data = [1, 2, 3, 4];
    const half = n => n / 2;
    const result = changeElem(data, half);

    assert.deepStrictEqual(result.initial, [1, 2, 3, 4], 'initial array не совпадает');
    assert.deepStrictEqual(result.modified, [0.5, 1, 1.5, 2], 'modified array некорректен');

    assert.throws(() => changeElem('not array', half), /Первый аргумент должен быть массивом чисел/);
    assert.throws(() => changeElem(data, 'not function'), /Второй аргумент должен быть функцией/);
})();


(function testEncodeCards() {
    const cardNumbers = [
        '4000 0012 0056 9499',
        '4000 0013 5456 7379',
        '4000 001 5456 79',
        '4000 001414569869',
        '4000 0014 1456 9869'
    ];
    const expected = [
        '4000 **** **** 9499',
        '4000 **** **** 7379',
        null,
        null,
        '4000 **** **** 9869'
    ];

    assert.deepStrictEqual(encodeCards(cardNumbers), expected);
})();


(function testCheckArray() {
    const data = [1, 2, 3, 4, 9, 'string', false];
    const isFiniteNumber = v => Number.isFinite(Number(v));
    const isDefined = v => v !== undefined;

    assert.strictEqual(checkArray(data, isFiniteNumber), false, 'checkArray с isFiniteNumber должен вернуть false');
    assert.strictEqual(checkArray(data, isDefined), true, 'checkArray с isDefined должен вернуть true');
})();


(function testFromMillenium() {
    const { hours, days } = fromMillenium();

    assert.strictEqual(typeof hours.value, 'number', 'hours.value должен быть числом');
    assert.strictEqual(typeof days.value, 'number', 'days.value должен быть числом');

    assert.strictEqual(typeof hours.log, 'function', 'hours.log должен быть функцией');
    assert.strictEqual(typeof days.log, 'function', 'days.log должен быть функцией');
})();

console.log('тесты пройдены');
