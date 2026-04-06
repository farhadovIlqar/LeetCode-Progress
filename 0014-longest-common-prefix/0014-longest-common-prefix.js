/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let min = Infinity;
    let index = 0;
    let result = "";

    for (let str of strs) {
        if (str.length < min) {
            min = str.length;
            index = strs.indexOf(str);
        }
    }
    var say;

    function deneme() {
        say=0;
        for (let str of strs) {
            console.log(str.startsWith(strs[index]), strs[index], say);
            if (str.startsWith(strs[index])) {
                say++;
            }
            else {
                strs[index] = strs[index].slice(0, strs[index].length - 1);
                deneme();
                return;
            }

        }
    }
    deneme();
    console.log(say)

    if (say == strs.length) {
        return strs[index];
    }
    else {
        return "";
    }

};