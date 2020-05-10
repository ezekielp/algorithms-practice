/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    let shortestStrLength = Math.min(...strs.map(str => str.length));
        
    let prefix = '';
    let foundAMismatch = false;
    let idx = 0;
    
    while (!foundAMismatch && idx < shortestStrLength) {
        let firstChar = strs[0][idx];
        
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][idx] !== firstChar) {
                foundAMismatch = true;
                break;
            }
        }
        if (!foundAMismatch) {
            prefix += strs[0][idx];
            idx++;
        }
    }
    
    return prefix;
    
};


