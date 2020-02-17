/*
 * @param {number} n
 * @return {string}
 */

/*
1.     1
2.     11
3.     21
4.     1211
5.     111221
*/


const countAndSay = (n) => {
    if (n === 1) return "1";

    const previous = countAndSay(n - 1);
    const partsOfPrevious = [];
    let stack = [];
    let currentChar, currentChunk;

    for (let i = 0; i < previous.length; i++) {
        currentChar = previous[i];
        if (stack.length === 0 || stack[stack.length - 1] === currentChar) {
            stack.push(currentChar);
        } else {
            currentChunk = stack.join("");
            partsOfPrevious.push(currentChunk);
            stack = [currentChar];
        }
    }
    if (stack.length) {
        currentChunk = stack.join("");
        partsOfPrevious.push(currentChunk);
    }
    
    let result = "";

    for (let j = 0; j < partsOfPrevious.length; j++) {
        currentChunk = partsOfPrevious[j];
        let numOfNums = currentChunk.length.toString();
        result += numOfNums + currentChunk[0].toString();
    }

    return result;
        
};

console.log(countAndSay(5));


