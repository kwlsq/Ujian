var koin = [25,20,5,1];

function cekKoin(input,koin){
    output=0
    for(var i=0;i<koin.length;i++){
        if(input-koin[i]>=0){
            console.log(input)
            input-=koin[i];
            output++;
        } 
    }  
    
    return output
}

console.log(cekKoin(49,koin));
// console.log(cekKoin(50,koin));
// console.log(cekKoin(31,koin));