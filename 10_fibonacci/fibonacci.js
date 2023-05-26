const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS"
    }
    let a = 0;let b = 1;let c;
    const fiboArr = [];
    for (let i = 0; i <= position+2 ; i++){
        fiboArr.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return fiboArr[position];
};
// Do not edit below this line
module.exports = fibonacci;
