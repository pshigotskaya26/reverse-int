module.exports = function reverse (n) {
 let nToString = String(n);
 let reverseString = '';
 let i, j;

 if (nToString[0] === '-') {
     nToString = nToString.slice(1);
 }

 if (nToString[nToString.length -1] === '0') {
     nToString = nToString.slice(0, nToString.length -1);
 }

for (i = nToString.length -1 ; i >= 0; i--) {
    reverseString += nToString[i];
}

return +reverseString;
}
