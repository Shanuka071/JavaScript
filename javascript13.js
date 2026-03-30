//Make a simple Calculator
let num1;
let num2;
function add(num1,num2){

    return num1+num2;
}
//Substract two numbers
function sub(num1,num2){
    if(num1>num2){
        return num1-num2;
    } else if(num2>num1){
        return num2-num1;
    }
}
//Multiplication of two numbers
function mul(num1,num2){
    return num1*num2;
}
//Division of two numbers
function div(num1,num2){
    return num1/num2;
}
//That can be used to edited.