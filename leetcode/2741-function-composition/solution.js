/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length===0) {
            return x;
        }
        else {
            let result=x;
            for(let i=functions.length;i>0;i--) {
                result=functions[i-1](result);

            }
            return result;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
