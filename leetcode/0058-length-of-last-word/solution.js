/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let i = s.length - 1 ;
    
     while (s[i] === " ") {
        i -- ;
     };

     let lengthOfLastStringWithoutSpace = 0 ;

     while (i >= 0 && s[i] !== " ") {
           lengthOfLastStringWithoutSpace ++ ;
           i-- ;
     }

     return lengthOfLastStringWithoutSpace ;
};
