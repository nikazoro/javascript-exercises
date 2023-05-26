const removeFromArray = function(list,...args) {
    const rList = [];

    list.forEach((item) => {

        if (!args.includes(item)) {
            rList.push(item)
        }
    })

    return rList;
};

// Do not edit below this line
module.exports = removeFromArray;
