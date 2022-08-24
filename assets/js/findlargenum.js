function findLargestNum(){      
    const arr=[];
    var listSize;
    var i;
    var largest =0;
    listSize =prompt("Enter the size of List");
    for(i=0; i<listSize; i++){
        arr.push(prompt("number"+i));       
    }
    console.log(arr);
    for(var i=0; i<arr.length; i++){
        if (largest < arr[i] ){
            largest =arr[i];
        }
    }
    console.log("Largest Number is :"+largest);
    
}
