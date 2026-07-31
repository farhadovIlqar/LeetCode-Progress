/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xS = x.toString()
    return xS == xS.split('').reverse().join('') ? true : false
};