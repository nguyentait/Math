//Thuat toan cong 2 so
function right(str,n){
    if(str.length-n>=0){
        return (str.substring(str.length-n,str.length))
    }
    else
        return "";
    
}
function left(str,n){
    if(n<=str.length)
        return (str.substring(0,n))
    else return ""
}

function cong2(a,b,mod){
    if(a.length<b.length){
        return cong2(b,a,mod)
    }
    let r1 =  right(a,1);
    r1 = r1===""?"0":r1;
    let r2 = right(b,1);
    r2 = r2===""?"0":r2;
    let n = parseInt(r1) + parseInt(r2) + mod
    if(n>9){
        mod = n%10;
        return [...cong2(
            left(a,a.length-1),left(b,b.length-1),Math.floor(n/10)
        ),mod.toString()]       
    }else{
        return [...cong2(
            left(a,a.length-1),left(b,b.length-1),0
        ),n.toString()]
    }
}


function add(a,b){
    return cong2(a,b,0).join("")
}
console.log(add("123","32") )