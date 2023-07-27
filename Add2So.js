// function add2So(a:string [],b:string[],mod:number,i){
//     if(a.length<b.length){
//         return add2So(b,a,0,b.length)
//     }else{
//         const n:number = parseInt( a[i]) + parseInt( b[i]) + mod;
//         const n1 = n%10;
//         const m1 =  n /10;
//         // n = n
//         if(n>9){
//             return [ ...add2So(a,b,m1,i-1),n1]
//         }else{
//             return [ ...add2So(a,b,0,i-1),n]
//         }
//     }
// }
function add2So(a,b,mod,i){
        if(a.length<b.length){
            return add2So(b,a,0,b.length)
        }else{
            if(i>=0){
                const n = parseInt( a[i]) + parseInt( b[i]) + mod;
                const n1 = n % 10;
                const m1 =  n /10;
                // n = n
                if(n>9){
                    return [ ...add2So(a,b,m1,i-1),n1]
                }else{
                    return [ ...add2So(a,b,0,i-1),n]
                }
            }else
                return []
            
        }
    }

    //add2So(["1"],["2"],0,1)