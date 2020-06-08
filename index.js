//数组去重
function arraySet(arr) {
    if(Array.isArray(arr)){
        var newArr = [];
        for(var i=0; i<arr.length;i++) {
            if(newArr.indexOf(arr[i]) === -1){
                newArr.push(arr[i])
            }            
        }
        return newArr;
    }
}

//数组扁平化
function arrayFlat(arr) {
    if(Array.isArray(arr)){
        var newArr = arr.toString().split(',').map(function(item){
            return Number(item);
        })
        return newArr;
    }
}

export default {
    arraySet: arraySet,
    arrayFlat: arrayFlat
}