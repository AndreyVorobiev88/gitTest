/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/




var kidsWithCandies = function(candies, extraCandies) {

    var rez = new Array(); 
    
    for (let i = 0; i < candies.length; i++) {
        
        if(candies[i]+extraCandies >= Math.max.apply(null, candies))
        {
            rez.push(true)
        }
        else
            rez.push(false)
        
    }

    return rez
};