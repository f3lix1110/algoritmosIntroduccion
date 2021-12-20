
let number1 = prompt("escribe el primer numero: ");
let number2 = prompt("escribe el segundo numero: ");
let number3 = prompt("escribe el tercero numero: ");
let number4 = prompt("escribe el cuarto numero: ");
let number5 = prompt("escribe el quinto numero: ");
let numeroA = [];

function numeroalto(i1,i2,i3,i4,i5){ 

    if(i1>=i2&&i1>=i3&&i1>=i4&&i1>=i5){
        numeroA.push(i1);
    }else if(i2>=i1&&i2>=i3&&i2>=i4&&i2>=i5){
        numeroA.push(i2);
    }else if(i3>=i2&&i3>=i1&&i3>=i4&&i3>=i5){
        numeroA.push(i3);
    }else if(i4>=i2&&i4>=i3&&i4>=i1&&i4>=i5){
        numeroA.push(i4);
    }else if(i5>=i2&&i5>=i3&&i5>=i4&&i5>=i1){
        numeroA.push(i5);
    }
    return numeroA;
}

numeroalto(number1,number2,number3,number4,number5);  //llamas a 1a funcion

console.log(numeroA);