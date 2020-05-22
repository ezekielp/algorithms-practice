// Write a function myCurry which takes in a callback, and the number of arguments to take before
// executing, and returns a curried function that accepts one argument.
// Once you have reached the specified number of arguments, return and invoke the callback with the array of collected arguments

// const sum = function (array) {
//     return array.reduce((a, b) => a + b);
// };
// const curriedSum = myCurry(sum, 3);
// const stepOne = curriedSum(1);
// returns a function const stepTwo = stepOne(2);
// returns a function const stepThree = stepTwo(3);
// returns 6


const myCurry = (cb, numArgs) => {

    const args = [];

    const _myCurry = (arg) => {
        args.push(arg);

        if (args.length === numArgs) {
            console.log(cb(args));
            return cb(args);
        } else {
            return _myCurry;
        }
    }

    return _myCurry;
    // if (args.length === numArgs) {
    //     return cb(args)
    // }
    
    // return (arg) => args.push(arg);
}


const sum = function (array) {
    return array.reduce((a, b) => a + b);
};
const curriedSum = myCurry(sum, 3);
const stepOne = curriedSum(1);
const stepTwo = stepOne(2);
const stepThree = stepTwo(3);
// returns 6
