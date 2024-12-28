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

/*
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
*/

var singleNumber = function(nums) {

var obj = {};   

for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) obj[nums[i]] += 1
    else
        obj[nums[i]] = 1;
}

return Object.keys(obj).find(key => obj[key] === 1);

};

var singleNumber = function(nums) {

    var obj = {};   
    
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) obj[nums[i]] += 1
        else
            obj[nums[i]] = 1;
    }
    
    return +Object.keys(obj).find(key => obj[key] === 1);
    
    };
    