function confirmEnding(string1,string2){
  return string1.slice(string1.length-string2.length)===string2;

}
let string1="Bastian";
let string2="n";
console.log(confirmEnding("Bastian","n"));