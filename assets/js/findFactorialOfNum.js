
/* var spankey = document.querySelector('factorialNum')
spankey.addEventListener('keyup',(e)=>{
    if(e.keycode ===13){
        factoutput.innerHTML="";
    }

})*/

function findFactorialNum(){
    let number= parseInt(document.getElementById('factorialNum').value); 
    let factoutput =document.getElementById('output');
    
    if(number == 0){
        let fact=1;     
        console.log(number);   
        factoutput.innerHTML="The Factorial of Number is :"+ fact;
        console.log(fact); 
        return true;
    }
    else{
        console.log(number);
        let fact=1;
        for(i=1; i<=number; i++){
            fact *= i;
        }
        console.log(fact);   
        factoutput.innerHTML='The Factorial of '+ number +' is :' + fact;
        return true;
    }

}

