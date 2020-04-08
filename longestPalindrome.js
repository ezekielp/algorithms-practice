// https://leetcode.com/problems/longest-palindrome/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const charCountHash = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCountHash[char]) {
            charCountHash[char]++;
        } else {
            charCountHash[char] = 1;
        }
    }

    let foundAtLeastOneOccurrenceOfAnOddNumberCharCount = false;
    let totalCharCount = 0;

    for (let char in charCountHash) {
        let charCount = charCountHash[char];
        if (!evenNum(charCount)) {
            totalCharCount += charCount - 1;
            foundAtLeastOneOccurrenceOfAnOddNumberCharCount = true;
        }

        if (evenNum(charCount)) {
            totalCharCount += charCount;
        }
    }

    const addOneOrNot = foundAtLeastOneOccurrenceOfAnOddNumberCharCount ? 1 : 0;
    return totalCharCount + addOneOrNot;

};

const evenNum = num => num % 2 === 0;

testString = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";

console.log(longestPalindrome(testString));