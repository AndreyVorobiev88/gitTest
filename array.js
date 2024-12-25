/**
 * @param {number[1,2,3,1,2]} nums
 * @return {number}
 */



var singleNumber = function(nums) {

    let rez;
    
    if (nums.length == 1) return nums[0];
    else
    {
        nums.sort();
        let i = 0;
        while (i < nums.length) 
        {
            if (nums[i] == nums[i+1]) {
                i+=2;
            }
            else
            {
                rez = nums[i];
                break;
            }
        }
    }

    return rez;
};
