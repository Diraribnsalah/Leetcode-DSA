/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if (n <= 2) {
         return n;
     }
      [first , second] = [1 , 2]
     for (let i = 3 ; i < n + 1 ; i++) {
          let current = first + second ;
          first = second;
          second = current;
     }
     return second;
};
