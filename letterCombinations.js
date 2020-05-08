/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const numToLettersHash = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    let currentCombos = numToLettersHash[digits[0]]; // [a, b, c]

    for (let i = 1; i < digits.length; i++) { // 1
        const currentDigit = digits[i]; // 3
        const lettersToAdd = numToLettersHash[currentDigit]; // [d, e, f]

        let newCombos = []; // [ad, ae, af, bd, be, bf, cd, ce, cf]
        for (let j = 0; j < lettersToAdd.length; j++) { // 0
            const letterToAdd = lettersToAdd[j]; // d
            currentCombos.forEach(combo => {
                newCombos.push(combo + letterToAdd);
            })
        }

        currentCombos = newCombos;

    }

    return currentCombos;

};




