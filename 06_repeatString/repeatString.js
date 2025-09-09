const repeatString = function(text, time) {
    if (time < 0) 
        return "ERROR";
    let repeat = "";
    for (let i = 0; i < time; i++) {
        repeat += text;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
