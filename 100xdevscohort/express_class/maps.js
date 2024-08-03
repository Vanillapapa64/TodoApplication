const input= [2,4,6,8,10,12];

const ans= input.filter((n)=>{
    if (n%5==0){
        return true;
    }else{
        return false;
    }
})
console.log(ans)