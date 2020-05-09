/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let colNum = 0;
    let reversedStr = s.split('').reverse().join('');
    
    for (let i = 0; i < reversedStr.length; i++) {
        colNum += ((26 ** i) * (1 + alphabet.indexOf(reversedStr[i])));
    }
    
    return colNum;
};

console.log(titleToNumber('AA'));
console.log(titleToNumber('ZY'));