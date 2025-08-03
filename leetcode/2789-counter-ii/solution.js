/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
     return {
         currentValue:init,
        increment:function(){
          this.currentValue++;
          return this.currentValue;
        },
        decrement:function() {
            this.currentValue--;
            return this.currentValue;
        },
        reset:function() {
          this.currentValue=init;
          return   this.currentValue;
        },
     }
       
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
