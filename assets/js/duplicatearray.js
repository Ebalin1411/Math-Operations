function findduplicate(){ 
        var print = document.getElementById('output');
        const numberslist=[];
          
        var set = new Set();
        var duplicates = new Set();
          
            for(var i=0; i<10;i++){
                var userInput=prompt('Enter 10 numbers one by one');
                numberslist.push(parseInt(userInput));               
                var size = set.size;
                set.add(numberslist[i]);               
                if (set.size === size)
                {
                    duplicates.add(numberslist[i]);                   

                 }
                 }
                    console.log('User Input is  :'+numberslist);     
                    console.log(duplicates)                   
                    return duplicates;           
               
     }
                  
            
            
         

