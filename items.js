let item1= parseFloat(prompt("Dame el precio 1"));
let item2= parseFloat(prompt("Dame el precio 2"));
let item3= parseFloat(prompt("Dame el precio 3"));
let preciosbajos =[];

function precioBajo(i1,i2,i3){ // creas 1 funcion

    if(i1>i2&&i1>i3){
        preciosbajos.push(i2,i3)
    }else if(i2>i1&&i2>i3){
        preciosbajos.push(i1,i3)
    }else if(i3>i2&&i3>i1){
        preciosbajos.push(i2,i1)
    }
    return preciosbajos;
}

precioBajo(item1,item2,item3);  //llamas a 1a funcion

console.log(preciosbajos); 