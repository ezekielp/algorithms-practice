/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const eachStrSorted = strs.map((str, idx) => {
        return {
            str: str.split('').sort().join(''),
            idx
        }        
    });
    eachStrSorted.sort((pair1, pair2) => {
        if (pair1.str < pair2.str) {
            return -1;
        }
        if (pair1.str > pair2.str) {
            return 1;
        }
        return 0;
    });

    const anagrams = [];
    
    let i = 1;
    let group = [eachStrSorted[0]];

    while (i < eachStrSorted.length) {
        while (eachStrSorted[i] && eachStrSorted[i].str === group[group.length - 1].str) {
            group.push(eachStrSorted[i]);
            i++;
        }
        anagrams.push(group);
        if (i < eachStrSorted.length) {
            group = [eachStrSorted[i]];
            i++;
        }
    }
    
    return anagrams.map(group => group.map(pair => {
        return strs[pair.idx];
    }));
    
};

const example1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(example1));

// Somehow use a bunch of different hashes ??
// Just sort each string and then sort the whole array ??