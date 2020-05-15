
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const longestLengths = new Array(9);
    longestLengths.fill(0);
    
    const hash = {};
    const zeros = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(0);
        } else {
            const str = nums[i].toString();
            const firstDigit = parseInt(str[0]);
            longestLengths[firstDigit - 1] = Math.max(longestLengths[firstDigit - 1], str.length);

            if (!hash[firstDigit]) {
                hash[firstDigit] = [i];
            } else {
                hash[firstDigit].push(i);
            }            
        }

    }
    
    // console.log(longestLengths);
    // console.log(hash);

    const result = [];
    
    for (let j = 9; j > 0; j--) {
        const list = [];
        const digit = j;
        
        if (hash[j]) {
            for (let k = 0; k < hash[j].length; k++) {
                let str = nums[hash[j][k]].toString();
                const diff = longestLengths[j - 1] - str.length;
                for (let m = 0; m < diff; m++) {
                    str += digit.toString();
                }
                list.push({
                    num: str,
                    idx: hash[j][k]
                })
            }
        }

        
        list.sort((a, b) => {
          if (parseInt(b.num) !== parseInt(a.num)) {
              return parseInt(b.num) - parseInt(a.num);
          };
            return nums[a.idx] - nums[b.idx];
            // compare the last two digits, and if the last one is bigger
            // you return the longer num, if the second-to-last one
            // is bigger, you return the shorter num .......... I think
            
        });
        console.log(list);
        list.forEach(pair => result.push(nums[pair.idx]));
    }

    if (!result.length) return "0";
    return result.concat(zeros).join('');
    
};

const example1 = [7543, 5328, 9834, 1940, 9387, 871, 5208, 7, 543];

largestNumber(example1);

// build a fancy hash by first digit and nest by number of digits
// then put them together with the first digit ones all first,
// then the others, sorted in descending order ??

// 9 | 91 | 990
// 999091
// 991990


"995998 5496429 63295795569525905189958985890288238775871870185978591838283748308308827481618052787813771758475277519744072727265721971071006861683682268046787640663256310614560285906582858175752573156385565552654905441522852245213513750414822478747104662455545424532434289408839763963946391038663723370035134023393328828692788270926232581243924362362304226421162109163016131603127 210891014"

"995998 5496429 63295795569525905189958985890288238775871870185978591838283748308830827481618052787813771758475277519744072727265721971071006861683682268046787640663256310614560285906582858175752573156385565552654905441522852245213513750414822478747104662455545424532434289408839763963946391038663723370035134023393328828692788270926232581243924362362304226421162109163016131603127 210891014"






