
function cong(n1,n2){
    const a = n1.split("")
    const b = n2.split("")
    return ad(a,b,0,a.length,b.length).join("")
}
function ad(a,b,mod,i,j){
        if(a.length<b.length){
            return ad(b,a,0,b.length,a.length)
        }else{
            if(i>0){
                let n;
                if(j>0){
                    n = parseInt( a[i-1]) + parseInt( b[j-1]) + mod;
                }
                else{
                    n = parseInt( a[i-1]) + mod
                }
                const n1 = n % 10;
                const m1 =  (n-n1) /10;
                if(n>9){
                    return [ ...ad(a,b,m1,i-1,j-1),n1]
                }else{
                    return [ ...ad(a,b,0,i-1,j-1),n]
                }
            }else
                return []
            
        }
    }
    
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
        return [...cong(
            left(a,a.length-1),left(b,b.length-1),0
        ),n.toString()]
    }
}

console.log(cong2("9","9",0).join(""))



