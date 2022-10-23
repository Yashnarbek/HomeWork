let a = prompt()
let b = 0
let c = 0
for(let i = 0; i < a.length; i++){
    if(Number(a[i]) == a[i]){
        b = b + 1
        console.log(a[i]);
        c = c + Number(a[i])
    }
}  
console.log(b + " ta son bor");
console.log("Yig'indisi " + c + " ga teng");