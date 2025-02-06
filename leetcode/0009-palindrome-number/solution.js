/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let str=x.toString();
     let reverseStr=str.split('').reverse().join('');
    if(str.length==1)
    {
        return true;
    }
    else{
        return reverseStr===str;
    }
     
};
