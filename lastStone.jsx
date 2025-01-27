/**
 * @param {number[]} stones
 * @return {number}
 */


/*
________________
Рекурсия 
________________

function smash(stones)
{
    if (stones.length == 0) return 0;
    if (stones.length == 1) return stones[0];

    stones.sort((a, b) => b - a);
    console.log(stones);

    if (stones[0] == stones[1])
    {
        stones.splice(0,2);
    }
    else if (stones[0] > stones[1])
    {
        stones[0] = stones[0] - stones[1];
        stones.splice(1,1);
    }
    else{
        stones[1] = stones[1] - stones[0];
        stones.splice(0,1);
    }

    return smash(stones);


}
*/

function smashCount(stones)
{

    if (stones[0] == stones[1])
        {
            stones.splice(0,2);
        }
        else if (stones[0] > stones[1])
        {
            stones[0] = stones[0] - stones[1];
            stones.splice(1,1);
        }
        else{
            stones[1] = stones[1] - stones[0];
            stones.splice(0,1);
        }
    
    return stones;

}

var lastStoneWeight = function(stones) {

    while (stones.length <=1) {
       
        stones.sort((a, b) => b - a);
        stones = smashCount(stones);

    }

    if (stones.length == 0) return 0;
    return stones[0];
    
};