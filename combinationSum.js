// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];
    const combinationSet = new Set();
    let addedCombinationToSet = true;
    candidates.forEach(num => {
        combinationSet.add(num.toString());
    })

    while (addedCombinationToSet) {
        addedCombinationToSet = false;
        for (let i = 0; i < candidates.length; i++) {
            let currentCandidate = candidates[i];
            if (combinationSet.size > 0) {
                console.log(combinationSet);
                combinationSet.forEach(combo => {
                    if (addCombination(combo) < target) {
                        let newCombo = combo + "+" + currentCandidate;
                        if (addCombination(newCombo) <= target) {
                            combinationSet.add(newCombo);
                            addedCombinationToSet = true;
                        }
                    } else if (addCombination(combo) === target) {
                        results.push(combo);
                    } 
                    combinationSet.delete(combo);
                })
            }
        }
    }

    return results.map(combo => combo.split("+").map(numAsStr => parseInt(numAsStr)));

};

const addCombination = combination => combination.split("+").map(numAsStr => parseInt(numAsStr)).reduce((acc, val) => acc + val);

const exampleCandidates1 = [2, 3, 6, 7];
const exampleTarget1 = 7;

console.log(combinationSum(exampleCandidates1, exampleTarget1));

// Looks like you basically got it!
// Just have to change your weird way of doing the numbers to be sets within the set
