/**
 * @param {number[1,2,3,1,2]} nums
 * @return {number}
 */


/*
var singleNumber = function(nums) {

    nums.sort();
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i+1]) {
            i++;
        }
        else return nums[i];

    }

    return undefined;
};
*/

var singleNumber = function(nums) {

    let rez = undefined;

    for (let i = 0; i < nums.length; i++)
    {
        if (nums.indexOf(nums[i],0) === nums.lastIndexOf(nums[i])) {
            rez = nums[i];
            break;
        }
    }

    return rez;

};
