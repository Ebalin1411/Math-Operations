function Fibonacci(){
    let number =parseInt(document.getElementById('fibonacciNum').value);
    let fibonacciOutput=  document.getElementById('Output');
    console.log(number);
    var result=[0,1];
    var num1=result[0];
    var num2=result[1];
    var next;
    var cnt=2;
    console.log(result)
    while(cnt < number){
        next=num1+num2;
        num1=num2;
        num2=next;
        result.push(next);
        cnt++;
    }
    console.log(result) ;    
    fibonacciOutput.innerHTML='Fibonacci Series  :'+ result;
    
}