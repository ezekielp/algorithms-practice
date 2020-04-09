

const fibonacciMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
};

const example2 = 2; // 1
const example3 = 3; // 2
const example4 = 4; // 3
const example5 = 5; // 5

console.log(fibonacciMemo(2));
console.log(fibonacciMemo(3));
console.log(fibonacciMemo(4));
console.log(fibonacciMemo(5));

// fibonacciMemo(4, {}) => memo[4] = fibonacciMemo(3, {}) + fibonacciMemo(2, {});
// fibonacciMemo(3, {}) => memo[3] = fibonacciMemo(2, {}) + fibonacciMemo(1, {});
// fibonacciMemo(2, {}) => memo[2] = fibonacciMemo(1, {}) (1) + fibonacciMemo(0, {}) (0) => 1;

// fibonacciMemo(2, {}) => 1; (see above)
// fibonacciMemo(1, {}) => 1;
