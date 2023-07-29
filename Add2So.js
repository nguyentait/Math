
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
    



