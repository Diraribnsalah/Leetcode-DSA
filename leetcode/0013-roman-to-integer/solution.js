/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let roman={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total=0;
    if(s.length==1)
        {
             return roman[s[0]];
        }
      
        else{
            for(var i=0;i<s.length;i++)
                {
                    if(i==0)
                    {
                        total=roman[s[i]];
                    }
                       else  if( roman[s[i-1]]<roman[s[i]])
                            {
                                total+=roman[s[i]]-2*roman[s[i-1]];
                            }
                            
                            else{
                                   total+=roman[s[i]];
                            }
                    
                }
                
        }
  return total;
};
