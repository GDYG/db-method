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

//函数防抖
function debounce(fn) {
    var timer = null;
    return function() {
        var that = this;
        var args = arguments;
        if(timer) clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, 4000)
    }
}

//函数节流
function throttle(fn) {  
    var timer = new Date().getTime();
    return function() {
        var that = this;
        var args = arguments;
        var nowTime = Date.now();
        if(nowTime - timer > 3000) {
            fn.apply(that, args);
            timer = nowTime;
        }
    } 
}

//冒泡排序
function sortMao(arr) {  
    var len = arr.length;
    for(var i=0;i<len-1;i++) {
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var arrItem = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = arrItem;
            }
        }
    }
    return arr;
}

export default {
    arraySet: arraySet,
    arrayFlat: arrayFlat,
    debounce: debounce,
    throttle: throttle
}