//Infinity Calculator
let one = 0
let two = 0
let three = 0
let a = prompt("Birinchi sonni kiriting")
let b = prompt("Keyingi sonni kiriting")
let s = prompt("Amalni kiriting")

function sum (x, y, z){
    if(s == "+"){
        one = (a - 0) + (b - 0)
        alert(one);
    }else if(s == "-"){
        one = (a - 0) - (b - 0)
        alert(one);
    }else if(s == "*"){
        one = (a - 0) * (b - 0)
        alert(one);
    }else if(s == "/"){
        one = (a - 0) / (b - 0)
        alert(one);
    }else {
        alert("Bunday amal yo'q");
    }
}

sum(a, b, s)

for(let j = 0; true; j++){
    let move = prompt(one + ".    Amalni kiriting")
    let nextNumber =  prompt("Keyingi sonni kiriting")

    if(move == "+"){
        one = one + (nextNumber - 0)
        alert(one);
    }else if(move == "-"){
        one = one - (nextNumber - 0)
        alert(one);
    }else if(move == "*"){
        one = one * (nextNumber - 0)
        alert(one);
    }else if(move == "/"){
        one = one / (nextNumber - 0)
        alert(one);
    }else {
        alert("Bunday amal yo'q");
    }
}

