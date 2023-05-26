const reverseString = function(word) {
    let rev = "";
    for (let i = 1; i <= word.length; i++) {
        rev += word[word.length - i]
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;
