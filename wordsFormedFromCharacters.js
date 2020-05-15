/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charsHash = {};
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (!charsHash[char]) {
            charsHash[char] = 1;
        } else {
            charsHash[char]++;
        }
    }

    console.log(charsHash);
    let result = 0;

    for (let j = 0; j < words.length; j++) {
        const word = words[j];
        let shouldAddToResult = true;

        const wordHash = {};
        for (let k = 0; k < word.length; k++) {
            const char = word[k];
            if (!wordHash[char]) {
                wordHash[char] = 1;
            } else {
                wordHash[char]++;
            }
        }

        console.log(wordHash);
        for (let char in wordHash) {
            console.log(wordHash[char]);
            console.log(charsHash[char]);
            if (wordHash[char] > charsHash[char] || charsHash[char] === undefined) {
                shouldAddToResult = false;
            }
        }

        console.log(shouldAddToResult);
        if (shouldAddToResult) {
            result += word.length;
        }
    }

    return result;
};

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));


