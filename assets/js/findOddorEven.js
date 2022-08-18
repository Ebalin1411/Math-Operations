function checkOddorEven(){
    const arr=[];
    var i;    
    alert("Please Enter 10 Numbers one by One");
    for(i=1; i<=10; i++){
        arr.push(prompt("Enter "+ i + " of Ten Numbers"));        
         }
         console.log(arr)
         /*document.getElementById("Output").innerHTML=arr;*/
         arr.forEach(number =>{
            if (number % 2 !== 0){
                console.log(number +"---Odd");                
                /*document.getElementById("Output").innerHTML=number+"---Odd";*/
                }
                else{
                console.log(number +"----Even")
                /*document.getElementById("Output").innerHTML=number +"---Even";*/
                }
         })
        

}
