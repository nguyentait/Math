//* thuat toan tim so nguyen to
var fs = require("fs")
function SoNT(m){
    const lstNT = [2,3]
    for(let i = 4 ;i<m;i++){
        let l =lstNT.filter(x=>x<=Math.sqrt(i))
        let isNt = true;
        l.forEach(n=>{
            if(i%n==0){
                isNt = false
            }
        })
        if(isNt){
            lstNT.push(i)
        }
    }
    return lstNT;
}
fs.writeFile("data.txt",SoNT(1000).toString(),(err,data)=>{
    if(err){console.log("loi ghi file")}
})
// console.log(SoNT(100))