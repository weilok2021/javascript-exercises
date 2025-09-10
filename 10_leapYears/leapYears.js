const leapYears = function(year) {
    // IF year is divisible by 4
    //     IF year is divisible by 100 
    //         IF year is divisible by 400
    //             THEN it is leap year
    //         ELSE year is only divisible by 100
    //             THEN it is not leap year
    //     THEN it is leap year
    // ELSE
    //     THEN it is not leap year
    // ENDIF

    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
