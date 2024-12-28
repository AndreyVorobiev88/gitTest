/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function strToObj(str) {

    var obj = new Object();
    var arr = str.split('');

    arr.forEach(element => {
        if (obj.hasOwnProperty(element))
            obj[element] += 1
        else
            obj[element] = 1
    });

    return obj
}

function isDeepEqual(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    var Flag = true;
 
    if (keys1.length != keys2.length) 
        return false;
    
    keys1.forEach(element => {
        if (obj1[element] != obj2[element])  
            Flag = false; 
    });
 
    return Flag;
}


var isAnagram = function(s, t) {

    var objS = strToObj(s);
    var objT = strToObj(t);

    return (isDeepEqual(objS, objT));
    
};