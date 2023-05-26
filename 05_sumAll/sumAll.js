const sumAll = function(first , last) {
    if (first < 0 || last < 0) {
        return "ERROR"
    }
    if (!(Number.isInteger(first) && Number.isInteger(last))) {
        return "ERROR"
    }
    if (first > last) {
        let tmp = 0
        tmp = first
        first = last
        last = tmp
    }
    let sum = 0;
    for (let i = first ; i <= last; i++) {
        sum = sum + i;
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
