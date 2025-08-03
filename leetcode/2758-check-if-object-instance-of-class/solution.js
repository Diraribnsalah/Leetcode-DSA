/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
   if(obj===null || obj===undefined || typeof classFunction!=="function") return false
   let  objPrototype=Object.getPrototypeOf(obj);
   let classFnPrototype=classFunction.prototype;
   while(objPrototype) {
    if(objPrototype===classFnPrototype) {
        return true;
    }
    objPrototype=Object.getPrototypeOf(objPrototype);
   }
   return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
