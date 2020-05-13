/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const ones = [0];
    let powerOfTwo = 1;
    let i = 0;
    
    while (ones.length <= num) { 
        while (ones.length < 2 ** powerOfTwo) { 
            ones.push(ones[i] + 1);
            i++;
            if (ones.length === num + 1) return ones;
        }
        powerOfTwo++;
        i = 0;
    }
    
    return ones;
};

// [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1]

// 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 | 1001 | 1010 | 1011
// 1100 | 1101 | 1110 | 1111 | 10000
