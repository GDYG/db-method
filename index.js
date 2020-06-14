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

//选择排序
function selectSort(arr) {  
    var len = arr.length;
    for(var i=0;i<len-1;i++){
        var minIndex = i;
        for(var j=i+1;j<len;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

//插入排序
function  insertSort(arr) {
    if(arr == null && arr.length <= 1) return arr
    var len = arr.length;
    var newArr = [];
    for(var i=0;i<len;i++){
        var item = arr[i]; //11
        if(i === 0){ // 1
            newArr.push(item)
        }else {
            for(var j=newArr.length;j>=0;j--){ //10
                if(item > newArr[j]){
                    newArr.splice(j+1, 0, item)
                    break;
                }else if(j === 0) {
                    newArr.unshift(item)
                    break;
                }
            }
        }
    }
    return newArr;
}

//快速排序
function quickSort(arr){
    if(arr.length<=1) return arr;
    var partitionIndex=Math.floor(arr.length/2);
    var tmp=arr.splice(partitionIndex, 1);
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<tmp){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(tmp,quickSort(right))
}

//归并排序
function mergeSort(arr, seg = 1){
    const len = arr.length;
    if(seg > len){
      return arr;
    }
    const arrB = [];
    for(var start = 0; start < len; start += 2*seg){
      let low = start, mid = Math.min(start+seg, len), heig = Math.min(start+2*seg, len);
      let start1 = low, end1 = mid;
      let start2 = mid, end2 = heig;
      while(start1 < end1 && start2 < end2){
        arr[start1] < arr[start2] ? arrB.push(arr[start1++]) : arrB.push(arr[start2++]);
      }
      while(start1 < end1){
        arrB.push(arr[start1++]);
      }
      while(start2 < end2){
        arrB.push(arr[start2++]);
      }
    }
    return mergeSort(arrB, seg * 2);
  }

//堆排序
// 建最大堆
var len; //定义成全局变量
function buildHeap(arr) {
    len = arr.length;

    for (var i = Math.floor(arr.length / 2);i>=0; i--) {
        adjustHeap(arr, i)  //调整堆
    }
}

function adjustHeap(arr, i) {
    var left = 2 * i + 1,    // 左节点位置
        right = 2 * i + 2,  //右节点位置
        largest = i; // 最大值位置

    //如果左节点存在并且左节点大于 当前最大节点，交换位置
    if (left < len && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    //如果发现修改了，则交换位置
    if (largest !== i) {
        swap(arr, i, largest);
        adjustHeap(arr, largest)
    }

}
//交换位置
function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}

// 堆排序算法
function heapSort(arr) {
    buildHeap(arr)  //建堆
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);  //堆顶一定是最大元素，将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
        len--; //  去掉这个是从大到小排序
        adjustHeap(arr, 0) ///将最大的元素进行调整，将最大的元素调整到堆顶
    }
    return arr

}

var aa = [10, 11, 12, 4, 2, 9, 8, 0, 5, 6]
console.log(heapSort(aa))

export default {
    arraySet: arraySet,
    arrayFlat: arrayFlat,
    debounce: debounce,
    throttle: throttle,
    heapSort: heapSort,
    mergeSort: mergeSort,
    quickSort: quickSort,
    insertSort: insertSort,
    selectSort: selectSort
}