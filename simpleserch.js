let arr=[1,2,3,4,5]
let x=5

function search(arr,x){
    let flag=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            flag=true
        }
    }
    return flag;
}
var flag=search(arr,x);
if(flag){
        console.log("Element found")
    }else{
        console.log("Element not found")
    }

























