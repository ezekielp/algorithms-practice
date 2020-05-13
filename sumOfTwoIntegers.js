/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    const keep = (a & b) << 1;
    const XOR = a ^ b;
    console.log(keep);
    console.log(XOR);
    
    if (keep === 0) return XOR;
    
    return getSum(keep, XOR);
};

getSum(-2, 3);