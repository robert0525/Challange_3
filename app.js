/* var qestion1 = prompt("put width of reactangle");
var qestion2 = prompt("put height of reactagle");


qestion1 = parseInt(qestion1);
qestion2 = parseInt(qestion2);

var answer = qestion1 * qestion2;

document.write(" The area of Rectangle is " + answer + "cm");



var qestion3 = prompt("add width of secound reactangle");
var qestion4 = prompt("add height of secound reactagle");
var qestion5 = prompt("add length of secound reactagle");

qestion3 = parseInt(qestion1);
qestion4 = parseInt(qestion2);
qestion5 = parseInt(qestion1);

var answer_2 = qestion3 * qestion4 * qestion5;
document.write("<br> The volum area of secound Rectangle is " + answer_2 + "cm3</br>");

var qestion = prompt("add width of secound reactangle");

*/


var radius = prompt("add an radius of the circle ");
radius = parseInt(radius);


function calculateCircle(radius) {
    return Math.PI * (radius * 2);
  }
  
  document.write("<br> the area of circle is " + calculateCircle(radius) + "</br>");  