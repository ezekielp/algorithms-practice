// https://leetcode.com/problems/fibonacci-number/

var fib = function (N) {
    let fibNums = [0, 1];

    while (N >= fibNums.length) {
        let lastFibNum = fibNums[fibNums.length - 1];
        let secondToLastFibNum = fibNums[fibNums.length - 2];
        fibNums.push(lastFibNum + secondToLastFibNum);
    }

    return fibNums[N];
};

fib(2);