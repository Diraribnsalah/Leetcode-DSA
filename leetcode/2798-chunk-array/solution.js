/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
        if(arr.length===0) {
        return [];
    }
    if(arr.length<size && arr.length!==0)  {
        return [arr];
    };

    let chunkArray=[];
    let mockLength=Math.max(2,Math.floor(arr.length/size));

    for(let i=0;i<=mockLength;i++) {
        chunkArray.push(arr.slice(0,size));
        arr=arr.slice(size);
        if(chunkArray[i].length===0) {
            return  chunkArray.slice(0,-1);
        }
    }
    return  chunkArray;
};

