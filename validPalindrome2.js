/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	const indicesToTry = [];

	let i = 0;
	let j = s.length - 1;

	while (i <= j) {
		let startChar = s[i];
		let endChar = s[j];

		if (startChar !== endChar) {
            if (!indicesToTry.length) {
                indicesToTry.push([i + 1, j]);
                indicesToTry.push([i, j - 1]);
                i = j;
            }
		}

		i++;
		j--;
    }
    
    if (!indicesToTry.length) return true;

	while (indicesToTry.length) {

		let [i,
            j] = indicesToTry.shift();
        let foundMismatch = false;

		while (i <= j) {
			let startChar = s[i];
			let endChar = s[j];

			if (startChar !== endChar) {
                if (!indicesToTry.length) return false;
                i = j;
                foundMismatch = true;
            } 

			i++;
			j--;
        }
        
        if (!foundMismatch) return true;
	}

};

const example1 = "aba"; // true
const example2 = "aabcbbbcaa"; // true
const example3 = "abca"; // true
const example4 = "kasfjaa"; // false

console.log(validPalindrome(example1));
console.log(validPalindrome(example2));
console.log(validPalindrome(example3));
console.log(validPalindrome(example4));