/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];
    if (n === 1) return ["()"];

    let count = 1;
    let previousSet = new Set();
    let newSet = new Set();
    previousSet.add("()");

    while (count < n) {
        if (newSet.size > 0) {
            previousSet = newSet;
            newSet = new Set();
        }

        previousSet.forEach(parens => {
            let currentParens = parens;
            previousSet.delete(parens);

            currentParens = "()" + currentParens;

            newSet.add(currentParens);
            let splitParens = currentParens.split("");
            let idxOfFirstClosingParen = splitParens.findIndex(el => el === ')');
            
            for (let i = idxOfFirstClosingParen; i < splitParens.length - 2; i++) {
                let currentEl = splitParens[i];
                let nextEl = splitParens[i + 1];

                splitParens[i] = nextEl;
                splitParens[i + 1] = currentEl;
                newSet.add(splitParens.join(""));
            };
        });
        count++;
    };

    return Array.from(newSet);
    
};

console.log(generateParenthesis(3));

let validParens = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let currentParen = str[i];
        if (currentParen === "(") {
            count++;
        } else {
            if (count === 0) {
                return false;
            } else {
                count--;
            }
        }
    }

    return count === 0 ? true : false;

}

// ["(())"]
// ["()()"]

// ["()(())"]
// ["(()())"]
// ["((()))"]

// ["()()()"]
// ["(())()"]

// ['()()()', '(())()', '(()())']
// ['(()())', '(())()', '(()())']
// ["(()())"]


let exampleSolution1 = [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
];

// exampleSolution1.forEach(arr => console.log(validParens(arr)));

// [
// "(()()())",
   // "()()()()",
   // "(())(())",
   // "(())()()",
   // "()()(())",
   // "((()))()",
   // "()((()))",
   // "()(())()",
   // "((())())",
   // "(()(()))"
// ]