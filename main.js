arr1=[1,2,5];
arr2=[3,4,9];
function mergeArrays(arr1,arr2){
newArr=arr1.concat(arr2)
newArr.sort();
return newArr;
}
console.log(mergeArrays(arr1,arr2))