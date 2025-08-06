/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     let prefix=strs[0];
     let i=0
      while(i<strs.length) {
        while(!strs[i].startsWith(prefix)) {
           prefix=prefix.substring(0,prefix.length-1);
           if(prefix==="") {
            return "";
           }
        }
        i++;
      }
      return prefix;
};
