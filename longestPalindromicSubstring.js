/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return '';
    if (s.length === 1) return s;
    
    let mainMemo = {};
    let tempMemo = {};
    
    for (let i = 0; i < s.length; i++) {
        mainMemo[`${i}#${i}`] = s[i];
        if (s[i + 1] && s[i] === s[i + 1]) {
            mainMemo[`${i}#${i + 1}`] = s.slice(i, i + 2);
        }
    }

    let foundAPalindrome = true;
    
    while (foundAPalindrome) {
        foundAPalindrome = false;
        for (let indices in mainMemo) {
            let idxPair = indices.split("#").map(str => parseInt(str));
            let oneIdxBack = idxPair[0] - 1;
            let oneIdxAhead = idxPair[1] + 1;
            if ((s[oneIdxBack] && s[oneIdxAhead]) && s[oneIdxBack] === s[oneIdxAhead]) {
                foundAPalindrome = true;
                tempMemo[`${oneIdxBack}#${oneIdxAhead}`] = s.slice(oneIdxBack, oneIdxAhead + 1);
            }
        }
        if (foundAPalindrome) {
            mainMemo = tempMemo;
            tempMemo = {};
        };
    }
    
    return Object.values(mainMemo).reduce((longestStrSoFar, str) => {
        if (str.length > longestStrSoFar.length) {
            return str;
        } else {
            return longestStrSoFar;
        }
    });
    
};

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abcba"));

