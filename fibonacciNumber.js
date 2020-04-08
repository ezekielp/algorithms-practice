// https://leetcode.com/problems/fibonacci-number/

var fib = function (N) {
    let fibNums = [0, 1];

    while (N >= fibNums.length) {
        let lastFibNum = fibNums[fibNums.length - 1];
        let secondToLastFibNum = fibNums[fibNums.length - 2];
        console.log(lastFibNum);
        console.log(secondToLastFibNum);
        fibNums.push(lastFibNum + secondToLastFibNum);
        console.log(fibNums);
    }

    return fibNums[N];
};

fib(2);