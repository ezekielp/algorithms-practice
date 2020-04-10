/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let newS = [];
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i].toLowerCase();
		if (alphabet.includes(currentChar)) {
			newS.push(currentChar);
		}
	}

    console.log(newS);
	let i = 0;
	let j = newS.length - 1;

	while (i <= j) {
		const startChar = newS[i];
        const endChar = newS[j];
        console.log(startChar);
        console.log(endChar);
		if (startChar !== endChar) return false;

		i++;
		j--;
	}

	return true;
};

const example1 = "A man, a plan, a canal: Panama";

console.log(isPalindrome(example1));