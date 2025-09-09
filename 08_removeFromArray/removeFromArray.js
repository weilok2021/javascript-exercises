const removeFromArray = function (arr, ...elems) {
    for (let i = 0; i < arr.length; i++) {
        // IF the argument is found in the array, store the index
        for (elem of elems) {
            if (arr[i] === elem) {
                console.log(arr[i]);
                // REMOVE one element at ith position
                arr.splice(i, 1);
                // after we remove one element, 
                // the arr.length has decremented by 1, so next element will move to current position
                // Thus we have to decrement loop counter so that in next iteration,
                // the next element will be checked with current index
                i--;
            }
        }
    }

    return arr;
};

const arr = [1, 2, 3, 4];
console.log(removeFromArray(arr, 3));
console.log(arr);

// Do not edit below this line
module.exports = removeFromArray;
