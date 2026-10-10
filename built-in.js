function myMap(array, fn) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
return result;
}
function double(number){
    return number * 2;
}
console.log(myMap([1, 2, 3], double));

function myFilter(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
function isEven(number) {
    return number % 2 === 0;
}
console.log(myFilter([1, 2, 3, 4], isEven));

function myFind(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
    return undefined;
}
function multipleOfThree(number) {
    return number % 3 === 0;
}
console.log(myFind([1, 2, 3, 4, 5, 6], multipleOfThree));
 
function myReduce(array, fn, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = fn(result, array[i]);
    }
    return result;
}
function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}
console.log(myReduce([1, 2, 3, 4], sum, 0));

function myForEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
    return undefined;
}
function logValue(value) {
    console.log(value);
}
console.log(myForEach([1, 2, 3], logValue));





//With inbuilt methods
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(multiplyByTwo);
function multiplyByTwo(num) {
    return num * 2;
}

//filter
const arr2 = [1, 2, 3, 4, 5];
const greaterThanThree = arr2.filter(aboveThree);
function aboveThree(num) {
    return num > 3;
}

//reduce
const arr3 = [1, 2, 3, 4, 5];
const sumOfArr = arr3.reduce(sumReducer, 0);
function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
}   