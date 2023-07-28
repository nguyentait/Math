function MergeSort(data){
    let len = data.length
    if (len === 2) {
        return data[0]>data[1]?data[1]:data[0]
    }
    else if(len===1){
        return [...data]
    }
    else{
        let n = Math.floor(data.length/2)
        left = data.slice(0,n)
        right = data.slice(n,data.length)

        return [...merge(MergeSort(left),MergeSort(right))] ;
            
        }
    }
// let data = [3,2,5,1,3]
let data = [1,2,2,5,11,14,17]
function merge(arr1,arr2){
    let arr = []
    let left = 0
    let right = 0;
    

    let i = 0;
    while(left!==arr1.length || right!==arr2.length){
        
        if(arr1[left]<=arr2[right]){
            if(arr1[left])
                arr.push(arr1[left]);
            left = left + 1
        }else{
            if(arr2[right])
                arr.push(arr2[right]);
            right = right + 1
        }
        
        i = i+1;
        if(i==10)
        break;
    }
    
    return arr;
}
console.log(MergeSort(data))