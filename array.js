/**
 * @param {number[1,2,3,1,2]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
    
    if ((nums.length < 1) || (nums.length > 30000)) return undefined

   let rez = undefined;

   for (let i = 0; i < nums.length; i++) {

    let bFlag = true;

    for (let j = 0; j < nums.length; j++) {

        if((nums[i] == nums[j]) && (i != j))
        {
            bFlag = false;
        }
        
    }

    if (bFlag)
    {
        rez = nums[i];
        break;
    }

   }

    return rez;
};
