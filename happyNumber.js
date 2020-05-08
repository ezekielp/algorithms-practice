/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    
    let latestNum = n;
    set.add(latestNum);
    
    while (true) {
        let newNum = 0;
        let newNumSplit = latestNum.toString().split("").map(str => parseInt(str));
        newNumSplit.forEach(num => newNum += (num * num));
        latestNum = newNum;
        
        // console.log(latestNum);
        if (latestNum === 1) return true;
        if (set.has(latestNum)) return false;
        set.add(latestNum);
    }
};

console.log(isHappy(2));
