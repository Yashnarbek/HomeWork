// Tub sonlarni topadigan dasturcha

let a = prompt("Sonni kiriting")
let b = 0
for(let i = 1; i <= a; i++){
    if(a%i == 0){
        b = b + 1
    }
}
if(b == 2){
    console.log("tub");
}else if(b > 2) {
    console.log("Murakkab");
}else {
    console.log("Murakkab ham tub ham emas ");
}
