function findSumofTenNumbers(){
    const numberslist=[];
    for(let count=0; count<10; count++){
        const userResponse=prompt('Enter 10 Numbers one by one');
        
        numberslist.push(parseInt(userResponse));       
    }
    let sum=0;
    sum=sum+numberslist[0];
    let counter=1;
    for(let index=0; index<9; index++){
        sum=sum+numberslist[counter];
        counter=counter+1;
    }
    console.log(numberslist);
    console.log('sum =',sum);
}

