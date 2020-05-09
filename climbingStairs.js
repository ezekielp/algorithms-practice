const climbingStairs = n => {



}


console.log(climbingStairs(2));


// const climbingStairs = n => {

//     let stairCombos = [];
//     if (n === 0) return [];
//     if (n === 1) return [1];
//     if (n === 2) return [[1, 1], [2]];
    
//     const climbMoreStairs = (combo = []) => {
//         if (combo.length === 0) {
//             climbMoreStairs([1]);
//             climbMoreStairs([2]);
//         } else {
//             [1, 2].forEach(step => {
//                 let newCombo = combo.slice(0);
//                 newCombo.push(step);
//                 if (sumArr(newCombo) === n) {
//                     stairCombos.push(newCombo);
//                 } else if (sumArr(newCombo) < n) {
//                     climbMoreStairs(newCombo);
//                 } else {
//                     return;
//                 }
//             })
//         }
//     }

//     climbMoreStairs();
//     return stairCombos.length;

// }

// const sumArr = arr => arr.reduce((acc, el) => acc + el);

// console.log(climbingStairs(2));