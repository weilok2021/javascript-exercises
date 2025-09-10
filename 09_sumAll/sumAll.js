const sumAll = function (start, end) {
    // INITIALIZE the array to store range from start upto including end
    // 2 cases:
    // The start less than end (Common case)
    // The start more than end (Case 2)

    if (hasDecimal(start) || hasDecimal(end) || isNegative(start) 
        || isNegative(end) || notNumber(start) || notNumber(end)) {
        return "ERROR";
    }

    const arr = [];
    // The length of this array would be (absolute difference between start and end) + 1
    const length = Math.abs(end - start) + 1;

    // INITIALIZE starting index
    let i = 0;
    // IF start > end, swap values of start and end to make it a common range
    // Thus start < end.
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    while (start <= end && i < length) {
        arr[i] = start;
        start++; // increment start, and start moving towards n
        i++;
    }

    // SUM the element in this array using reduce
    const sum = arr.reduce((accumulator, currValue) => accumulator + currValue);
    return sum;
};

// Helper functions to check for invalid start and invalid end
function hasDecimal(n) {
    return n - Math.floor(n) !== 0;
}

function isNegative(n) {
    return n < 0;
}

function notNumber(n) {
    return typeof n !== "number";
} 



// Do not edit below this line
module.exports = sumAll;
