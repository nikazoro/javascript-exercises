const leapYears = function(year) {
    if (year%100===0 && year%400===0) {
        return true
    } else return year % 100 !== 0 && year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
