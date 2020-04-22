// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = new Set();
    const combinationSet = new Set();
    let addedCombinationToSet = true;
    candidates.forEach(num => {
        combinationSet.add(num.toString());
    })

    while (addedCombinationToSet) {
        addedCombinationToSet = false;
        for (let i = 0; i < candidates.length; i++) {
            let currentCandidate = candidates[i];
            console.log(currentCandidate);
            if (combinationSet.size > 0) {
                combinationSet.forEach(combo => {
                    if (addCombination(combo) < target) {
                        let newCombo = combo + "+" + currentCandidate;
                        let sortedNewCombo = newCombo.split("+").sort().join("+");
                        if (addCombination(sortedNewCombo) <= target && !combinationSet.has(sortedNewCombo)) {
                            combinationSet.add(sortedNewCombo);
                            addedCombinationToSet = true;
                        }
                    } else if (addCombination(combo) === target) {
                        results.add(combo);
                    } else {
                        combinationSet.delete(combo);
                    }
                })
            }
        }

    }

    return [...results].map(combo => combo.split("+").map(numAsStr => parseInt(numAsStr)));

};

const addCombination = combo => combo.split("+").map(numAsStr => parseInt(numAsStr)).reduce((acc, val) => acc + val);

const exampleCandidates1 = [2, 3, 6, 7];
const exampleTarget1 = 7;
const exampleCandidates2 = [2, 3, 5];
const exampleTarget2 = 8;

// console.log(combinationSum(exampleCandidates1, exampleTarget1));
console.log(combinationSum(exampleCandidates2, exampleTarget2));

// Looks like you basically got it!
// Just have to change your weird way of doing the numbers to be sets within the
