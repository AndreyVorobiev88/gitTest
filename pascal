/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    var rez = new Array();
    rez[0] = [1];
    //rez[0,0] = 1;

    for (i = 1; i < numRows; i++)
    {
        rez[i] = new Array();

        for (j = 0; j < i + 1; j++){

            if (j == 0 || j == i) rez [i][j] = 1
            else
                rez[i][j] = rez[i-1][j-1] + rez[i-1][j]

        }
    }
    
    return rez;
};