/**
 * @param {string} digits
 * @return {string[]}
 */

function f(combinations, letters) {

    let rez = [];

    rez = combinations.flatMap(comb => {

        return letters.map(letter => {

           return comb + letter

        })

    })


    return rez;

}

var letterCombinations = function(digits) {
    
    const letters = [, , ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    const nums = digits.split("");

    let rez = [];

    if (!digits.length) return rez

    nums.forEach((digit, i) => {

      if (!i)  rez = letters[+digit];
      else 
        rez = f(rez, letters[+digit]);  
        
    });

    return rez;

};