function checkOddorEven(){
    const arr=[];
    var i;    
    for(i=1; i<=10; i++){
        arr.push(prompt("Number"+i));        
         }
         console.log(arr)
         arr.forEach(number =>{
            if (number % 2 !== 0){
                console.log(number +"---Odd");
                }
                else{
                console.log(number +"----Even")
                }
         })
        console.log(arr.length)

}

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
    console.log("Largest Number"+largest);
    
}