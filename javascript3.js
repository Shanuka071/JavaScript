function isLeapYear(year){
if (year%400==0){
  return `${year} is a leap year.`
} else if(year%100==0){
  return `${year} is not a leap year.`
} else if(year%4==0){
  return `${year} is a leap year.`
}
}
let year=2024;
let year1=1900;
let result=isLeapYear(year);
let result1=isLeapYear(year1);
console.log(result1);
console.log(result);