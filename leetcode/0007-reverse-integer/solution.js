/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedStr = String(Math.abs(x)).split('').reverse().join('');
    
    let reversedNum = Number(reversedStr);
    
    let limitMin = Math.pow(-2, 31);       
    let limitMax = Math.pow(2, 31) - 1;    
    
    if (x < 0) {
        reversedNum = -reversedNum;
    }
    
    if (reversedNum < limitMin || reversedNum > limitMax) {
        return 0;
    }
    
    return reversedNum;

};
