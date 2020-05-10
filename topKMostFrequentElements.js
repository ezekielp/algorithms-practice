/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const frequencyHash = {};
    let minFrequency = 1;
    const mostFrequentSet = new Set();

    let leastFrequentFrequentNum = nums[0]; 
    mostFrequentSet.add(nums[0]) 
    frequencyHash[nums[0]] = 1;
    
    for (let i = 1; i < nums.length; i++) { 
        let num = nums[i];
        // console.log('frequencyHash: ', frequencyHash);
        // console.log('minFrequency: ', minFrequency);
        // console.log('mostFrequentSet: ', mostFrequentSet);
        // console.log('leastFrequentFrequentNum: ', leastFrequentFrequentNum);
        
        if (!frequencyHash[num]) { 
            frequencyHash[num] = 1;
        } else {
            frequencyHash[num]++; 
            if (mostFrequentSet.has(num) && num === leastFrequentFrequentNum) {
                let newMin = Infinity;
                mostFrequentSet.forEach(n => {
                    if (frequencyHash[n] < newMin) {
                        newMin = frequencyHash[n];
                        leastFrequentFrequentNum = n;
                    }
                })
                minFrequency = newMin; // 1
            }
        }
        
        if (mostFrequentSet.size < k) { 
            mostFrequentSet.add(num); 
        } else {
            if (frequencyHash[num] > minFrequency && !mostFrequentSet.has(num)) {
                mostFrequentSet.add(num);
                let minFreq = Infinity;
                let numToDelete;
                mostFrequentSet.forEach(n => {
                    if (frequencyHash[n] < minFreq) {
                        minFreq = frequencyHash[n];
                        numToDelete = n;
                    }
                })
                mostFrequentSet.delete(numToDelete);

                let newMin = Infinity;
                mostFrequentSet.forEach(n => {
                    if (frequencyHash[n] < newMin) {
                        newMin = frequencyHash[n];
                        leastFrequentFrequentNum = n;
                    }
                })
                minFrequency = newMin;
            }
        }
    }
    
    return Array.from(mostFrequentSet);
    
};

const exampleNums1 = [3, 1, 1, 1, 2, 2]
const exampleK1 = 2;
const exampleNums2 = [4, 1, -1, 2, -1, 2, 3];
const exampleK2 = 2;
// Output: [1, 2]

// console.log(topKFrequent(exampleNums1, exampleK1));
console.log(topKFrequent(exampleNums2, exampleK2));
// console.log(topKFrequent([1], 1));

// create a hash that counts the frequency of each num so far
// keep a list, somehow, of the ones that are most frequent so far
// monitor the lowest frequency of a most frequent num
// if a num becomes more frequent than the lowest frequency, ->
// replace it (but also need to figure out new min frequency, right?)
// I THINK MAYBE THE MOST FREQUENT NEED TO BE KEPT IN A MIN HEAP ???
// SO YOU CAN ALWAYS GET THE LEAST FREQUENT FREQUENT NUM TO REPLACE ??
// or maybe not ... look back at it 

