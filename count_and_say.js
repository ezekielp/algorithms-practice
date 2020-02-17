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
    const stack = [];
    let result = "";

    for (let i = 0; i < previous.length; i++) {
        
    }


    // let currentChar, currentChunk;
    // let i = 0;
    // currentChunk = "";

    // while (i < previous.length) {
    //     if (currentChunk.length === 0) {
    //         currentChunk = previous[i];
    //         i++;
    //     }
    //     while (currentChunk[currentChunk.length - 1] === previous[i]) {

    //     }
    // }
        



};




