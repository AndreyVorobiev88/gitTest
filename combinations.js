/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const letters = [, , ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    const nums = digits.split("");

    const rez = [];
    const str;

    nums.forEach(digit => {

        rez = letters[+digit].map(letter =>{

            return str + letter

        })
            
        
    });

    return rez;

};