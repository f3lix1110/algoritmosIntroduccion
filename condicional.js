//Write a program where a user enters the number of tasks they have completed.

let number = prompt("Cuantas tareas llevas");

if(number==15){
    alert("Excellent");
}else if(number<=6){
    alert("Failed");
}else if(number>6&&number<=9){
    alert("Insufficient");
}else if(number>9&&number<=14){
    alert("Good");
}else{
    alert("Error");
}