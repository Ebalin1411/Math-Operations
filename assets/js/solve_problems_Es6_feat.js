   let math_assign ={
        gen_arr:function(){
            //generate array with five random numbers 
            //push and generate random num both functions are happenig in one line
            let arr=[];
            arr.push(Math.floor( Math.random()*100));
            arr.push(Math.floor( Math.random()*100));
            arr.push(Math.floor( Math.random()*100));
            arr.push(Math.floor( Math.random()*100));
            arr.push(Math.floor( Math.random()*100));
            return arr
        }
        
   }  

    function findGreatest(){            
       
        let input_arr=[]=math_assign.gen_arr();
        console.log(input_arr);
       //Find the Greatest Number from the array
        let biggest =0;
        input_arr.reduce(function(previousval,currentval){                       
            biggest=previousval > currentval ? biggest= previousval : biggest =currentval;
            previousval=currentval;
            //console.log('Greatest num :'+biggest);
            return biggest
        });
        console.log('Greatest num :'+biggest);
        // write on show result div
         document.getElementById('tittle').innerText='Result';
         document.getElementById('input').innerText ='Random array Input  :['+ input_arr+']';
         document.getElementById('output').innerText ='Greatest Num is '+biggest;
         
    }      

    function findSquare(){
        let input_arr=[]=math_assign.gen_arr();
        console.log(input_arr);

        //Square of each number using map ------
        let resul_arr=[]= input_arr.map(function (val){
            return val * val;
        });
         //find Square of each number using map------

        console.log(resul_arr);
        // write on show result div
        document.getElementById('tittle').innerText='Find square of given array';
        document.getElementById('input').innerText = 'Input   :['+ input_arr+']';
        document.getElementById('output').innerText ='Output   :['+ resul_arr+']';
       
    }  

    function dispInputdiv(){
        document.getElementById('tittle').innerText='Enter the Number';
        /*to create input box for Number */
        let textBox =document.createElement("input");
        textBox.type="text";
        textBox.name="factorialNumInput";
        textBox.id="inputbox_id"
        
        /*Clear the iiner txt  */
        document.getElementById('input').innerHTML="";
        document.getElementById('output').innerHTML="";

        /*to create Button */
        let findButton=document.createElement("input");
        findButton.type ="button"; 
        findButton.value="Find Factorial";
        findButton.setAttribute("onclick","findFactorial()");   
        /*adding into the result div */
        let num_input =document.getElementById('input');
        document.getElementById('input').appendChild(textBox);
        document.getElementById('input').appendChild(findButton);

    }
       
    function findFactorial(){
       
        let n =parseInt(document.getElementById('inputbox_id').value);
        let input = []= Array.from({length: n}, (_, i) => i + 1)   
        console.log(input);
        let result =input.reduce((acc,ele)=>acc*ele,1);
        console.log(result);  
        document.getElementById('output').innerText ='Factorial of '+n + ' is :'+ result;
    }