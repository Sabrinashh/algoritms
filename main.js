arr1=[1,2,5];
arr2=[3,4,9];
function mergeArrays(arr1,arr2){
newArr=arr1.concat(arr2)
newArr.sort();
return newArr;
}
console.log(mergeArrays(arr1,arr2))

//===========================================================

let accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}