
// * Crear una función para pasar de árabes a romanos



 
function seeker(n) {
    let result;

    let basicRules = {

        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
  
    for(var [key, value] of Object.entries(basicRules)){
  
      if( n === key){
        result = value;
      }
    }
  
    return result;
  
};





function romanToArab(romanNumber) {
    
    let arabNumber = 0;
    
    romanNumber = romanNumber.toUpperCase().split('');
    
     
    while( romanNumber.length > 0) {

        if (romanNumber.length > 1)  {
            
            key = romanNumber[0] + romanNumber[1];
            numericValue = seeker(key);
            if(numericValue) {
                arabNumber = arabNumber + numericValue;
                romanNumber.splice(0, 2);
                continue;
            }

        }

        key = romanNumber[0];
        numericValue = seeker(key);

        arabNumber += numericValue;
        romanNumber.shift();
    };
        
    return arabNumber;
};



let romanNumber = "MCMLXXVIII";
console.log(`The Roman number ${romanNumber} equals to: ` + romanToArab(`${romanNumber}`))