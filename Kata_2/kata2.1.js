

// * Crear una función para pasar de número romanos a árabes



function arabToRoman(n) {
     
    let result = '';

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
    
    if( (n < 1) || (n > 3999)){

        console.log('Please, write a number between 1 and 3999');

    }else{
        
            while (n > 0 ) {
        
                for ( var [key, value] of Object.entries(basicRules)){
        
                    if (n >= value) {
                        n = n - value;
                        result = result + key;
                        break;
                    }     
                }  
            }
            return result;
    }


};

console.log("1958 in Roman numerals is " + arabToRoman(1958));
console.log("2020 in Roman numerals is " + arabToRoman(2020));