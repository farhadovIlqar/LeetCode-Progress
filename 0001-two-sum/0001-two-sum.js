/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var arr = [];
    for ( i = 0; nums[i] != null; i++) {
        for ( j = i+1; nums[j] != null ; j++) {
            if (nums[i] + nums[j] == target) {
                arr.push(i);
                arr.push(j);
                break;
            }
        }
    }
    return arr;
};