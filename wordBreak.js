/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// https://leetcode.com/problems/word-break/

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const exampleStr2 = "aaaaaaa";
const exampleDict2 = ["aaaa", "aaa"];

const exampleStr3 = "cars";
const exampleDict3 = ["car", "ca", "rs"]; // "carcars"

const palinSubSeq = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 2, 2, 2, 2, 2, 2],
    [0, 1, 2, 3, 3, 3, 3, 3],
    [0, 1, 2, 3, 3, 3, 3, 4],
]
// i = 3
// j = 1

// def lcs(X, Y): 
//     # find the length of the strings
// m = len(X)
// n = len(Y) 
  
//     # declaring the array for storing the dp values
// L = [[None] * (n + 1) for i in xrange(m + 1)]

// """Following steps build L[m+1][n+1] in bottom up fashion 
// Note: L[i][j] contains length of LCS of X[0..i - 1]
// and Y[0..j - 1]"""
// for i in range(m + 1):
//     for j in range(n + 1):
//         if i == 0 or j == 0 :
// L[i][j] = 0
// elif X[i - 1] == Y[j - 1]:
// L[i][j] = L[i - 1][j - 1] + 1
//             else:
// L[i][j] = max(L[i - 1][j], L[i][j - 1]) 
  
//     # L[m][n] contains the length of LCS of X[0..n - 1] & Y[0..m - 1]
// return L[m][n] 
// #end of function lcs 


const exampleStr4 = "goalspecial";
const exampleDict4 = ["go", "goal", "goals", "spec", "spe", "cial"];

var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let resultsSet = new Set(['']);
    let tempSet = new Set();

    let i;
    let j = 1;
    while (j < s.length + 1) {
        resultsSet.forEach(tempRes => { // ''
            i = tempRes.length; // 0
            if (wordSet.has(s.slice(i, j))) {
                tempSet.add(tempRes + s.slice(i, j));
            }
        })
        j++;
        resultsSet = tempSet;
        resultsSet.add('');
    }
    
    return resultsSet.has(s);
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak(exampleStr2, exampleDict2));
console.log(wordBreak(exampleStr3, exampleDict3));
console.log(wordBreak(exampleStr4, exampleDict4));
