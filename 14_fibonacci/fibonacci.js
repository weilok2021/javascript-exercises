const fibonacci = function(n) {
    // This function will return nth number in the fibonacci series
    // eg. fibonacci(5) = 1, 1, 2, 3, 5
    if (typeof n === "string")
        n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    }
    else if (n == 0 || n == 1) {
        return n;
    }
    let prev1 = 0;
    let prev2 = 1;
    let curr;
    for (let i = 1; i < n; i++) {
        curr = prev1 + prev2;
        // set prev1 to be prev2
        prev1 = prev2;
        // set prev2 to become curr
        prev2 = curr;
    }
    return curr;
};

console.log(fibonacci(5));
console.log(fibonacci(0));  
// Do not edit below this line
module.exports = fibonacci;
