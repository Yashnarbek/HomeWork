// String tarkibidagi numberlarni topish

let a = prompt()
let b = 0
for(let i = 0; i < a.length; i++){
    if(Number(a[i]) == a[i]){
        b = b + 1
        console.log(a[i]);
        
    }
}  
console.log(b + " ta raqam bor");