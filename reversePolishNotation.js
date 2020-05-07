/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const symbols = "+-/*";
    
    if (tokens.length === 1) return parseInt(tokens[0]);
    
    if (symbols.includes(tokens[tokens.length - 2]) || tokens.length === 3) {
        switch(tokens.pop()) {
            case "+":
                console.log(tokens[0]);
                console.log(tokens);
                return parseInt(tokens.shift()) + evalRPN(tokens);
            case "-":
                console.log(tokens[0]);
                console.log(tokens);
                return parseInt(tokens.shift()) - evalRPN(tokens);
            case "/":
                console.log(tokens[0]);
                console.log(tokens);
                return Math.round(parseInt(tokens.shift()) / evalRPN(tokens));
            case "*":
                console.log(tokens[0]);
                console.log(tokens);
                return parseInt(tokens.shift()) * evalRPN(tokens);
        }
    } else {
        switch(tokens.pop()) {
            case "+":
                console.log(tokens[tokens.length - 1]);
                console.log(tokens);
                return parseInt(tokens.pop()) + evalRPN(tokens);
            case "-":
                console.log(tokens[tokens.length - 1]);
                console.log(tokens);
                return parseInt(tokens.pop()) - evalRPN(tokens);
            case "/":
                console.log(tokens[tokens.length - 1]);
                console.log(tokens);
                return Math.round(parseInt(tokens.pop()) / evalRPN(tokens));
            case "*":
                console.log(tokens[tokens.length - 1]);
                console.log(tokens);
                return parseInt(tokens.pop()) * evalRPN(tokens);
        }        
    }
    
};

const example1 = ["2", "1", "+", "3", "*"];
const example2 = ["2", "1", "+"];
const example3 = ["4", "13", "5", "/", "+"];
const example4 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

// 5 + (17 + (10 * (6 / (-11 * (3 + 9)))));
12
-132
-1
-10
12

// console.log(evalRPN(example1));
// console.log(evalRPN(example2));
// console.log(evalRPN(example3));
console.log(evalRPN(example4));

