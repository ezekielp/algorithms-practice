/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

// Input:
const exampleStr1 = "catsanddog";
const exampleDict1 = ["cat", "cats", "and", "sand", "dog"];

const exampleStr2 = "pineapplepenapple";
const exampleDict2 = ["apple", "pen", "applepen", "pine", "pineapple"];

const exampleStr3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const exampleDict3 = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"];

// Output:
// [
//     "cats and dog",
//     "cat sand dog"
// ]

var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let resMap = {'': ''};
    let tempResMap = {};
    
    let i;
    let j = 1;
    while (j < s.length + 1) {
        for (let key in resMap) {
            i = resMap[key].length;
            let currentSlice = s.slice(i, j);
            if (wordSet.has(currentSlice)) {
                let newKey = key + "#" + currentSlice;
                tempResMap[newKey] = resMap[key] + currentSlice;
            }
        }
        j++;
        resMap = tempResMap;
        console.log(resMap);
        if (j < s.length + 1) {
            resMap[''] = '';
        } else {
            delete resMap[''];
        };
    }
    
    let mappedResults = Object.keys(resMap).map(res => res.split("#").slice(1).join(" "));

    return mappedResults.filter(res => res.split(" ").join("").length === s.length);
    
};

// console.log(wordBreak(exampleStr1, exampleDict1));
// console.log(wordBreak(exampleStr2, exampleDict2));
console.log(wordBreak(exampleStr3, exampleDict3));