const palindromes = function (str) {
    // Helper function to check if a character is punctuation or white space
    function isPunctuation(char) {
        return char === ' ' || char === '!' || char === '.' 
        || char === ',' || char === '@' || char === '?';
    }

    // RECEIVE 1 argument string 
    // Make this string to lowercase
    str = str.toLowerCase();
    console.log(str);
    // INITIALIZE starting index to keep track letters from beginning
    let start = 0;
    // INITIALIZE end index to keep track letters from the end
    let end = str.length - 1;
    // WHILE starting index is leess than or equal to end index
    while (start <= end) {
    //     WHILE letter with starting index is punctuation or white space
        while (isPunctuation(str[start])) {
            console.log(`This is a space or punctuation at the start! ${start}`)
            // INCREMENT starting index
            start++;
        } 
    //     WHILE letter with ending index is punctuation or white space
        while (isPunctuation(str[end])) {
            console.log(`This is a space or punctuation at the end! ${end}`)
            // DECREMENT end index
            end--;
        } 

        // IF letter with starting index is not equal to letter with end index
        if (str[start] !== str[end]) {
            // RETURN false, ax`s this is not a palindrome
            return false;
        }
        // INCREMENT start index
        start++;
        // DECREMENT end index
        end--;
        console.log(`start: ${start}`);
        console.log(`end: ${end}`);
        console.log(str[start], str[end]);
    // ENDWHILE
    }
    // RETURN true, as this is a palindrome
    return true;
};

// console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// console.log(palindromes("weilok"));

// Do not edit below this line
module.exports = palindromes;
