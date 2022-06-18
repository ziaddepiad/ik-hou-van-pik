module.exports = {grootsteGetal}

/* Algoritmiek opgave #3
   Opdracht: pas de functie zo aan,
   dat de functie het grootste getal
   van a en b teruggeeft
*/

function grootsteGetal(a, b) {
  var uitkomst = undefined;
 if(a > b){
  uitkomst = a;
 }
 else if(a < b){
  uitkomst = b;
 }
else if(a === b){
  uitkomst = a;
}
  return uitkomst;
}