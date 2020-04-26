// https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let foundACode = true;
    let res = s;
    let tempRes = '';
    let nums = '0123456789';
    let i = 0;
    
    while (foundACode) {
        foundACode = false;
        console.log(res);

        while (i < res.length) {
            // console.log(tempRes);
            if (nums.includes(res[i])) {
                foundACode = true;
                let currentNum = res[i];
                i++;
                while (nums.includes(res[i])) {
                    currentNum += res[i];
                    i++;
                };
                currentNum = parseInt(currentNum);
                i++;

                let subStr = '';
                let bracketCount = 1;
                while (bracketCount !== 0) {
                    if (res[i] === "]") {
                        if (bracketCount === 1) break;
                        bracketCount--;
                    } else if (res[i] === "[") {
                        bracketCount++;
                    }
                    subStr += res[i];
                    i++;
                }
                for (let j = 0; j < currentNum; j++) {
                    tempRes += subStr;
                }
                i++;

            } else {
                tempRes += res[i];
                i++;
            }
        }
        res = tempRes;
        tempRes = '';
        i = 0;
    }

    return res;

};

// const translate = subStr => {
//     let i = 0;
//     let currentNum = subStr[i];
//     let res = '';

//     i++;
//     while (nums.includes(subStr[i])) {
//         currentNum += subStr[i];
//         i++;
//     };
//     currentNum = parseInt(currentNum);
//     i++;

//     let subStr = '';
//     while (subStr[i] !== "]") {
//         subStr += subStr[i];
//         i++;
//     }
//     for (let j = 0; j < currentNum; j++) {
//         res += subStr;
//     }
//     i++;    
// }

const s1 = "3[a]2[bc]" // "aaabcbc".
const s2 = "3[a2[c]]" // "accaccacc".
const s3 = "2[abc]3[cd]ef" // "abcabccdcdcdef".
const s4 = "100[leetcode]";
const s5 = "3[a10[bc]]";

console.log(decodeString(s1));
console.log(decodeString(s2));
console.log(decodeString(s3));
console.log(decodeString(s4));
console.log(decodeString(s5));
