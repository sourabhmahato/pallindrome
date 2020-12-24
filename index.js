var readlineSync = require('readline-sync');
const dob = readlineSync.question("Date of birth in DD/MM format? \n");
var num = [];
var r = '';
function check (date){
for (var i =0 ; i< date.length; i++){
  num.push(date[i]);
}
for (var i =0; i< date.length; i++){
  r += num.pop();
}
if(r=== date){
  console.log("Yay, your date of birth is pallindrome");
} else {
  console.log("Oopsie, our date of birth is not pallindrome");
}
}
check(dob);