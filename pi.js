function calPi(n,i,d){
    if(i<=n){
        return d*1/(i)+ calPi(n,i+2,d*-1)
    }else{
        return d*1/(i)
    }
    
}
console.log(calPi(10000,1,1)*4)