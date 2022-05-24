const fibonacci = (num) => {
    let fibArray = [0, 1];
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        for (let i = 2; i <= num; i++) {
            fibArray.push(fibArray[i-2] + fibArray[i-1])
        }
    }
    return fibArray[num]
};

module.exports = {fibonacci}
