/*

# Primera Kata
## FooBarQuix

Nos dan un número entre el 1 y 100, y tenemos que devolver por orden lo siguiente:

* Si el número es divisible por 3, escribiremos “Foo” en lugar del número
* Si el número es divisible por 5, añadimos “Bar”
* Si el número es divisible por 7, añadimos “Quix”.
* Por cada dígito 3,5 o 7, añadiremos “Foo”, “Bar”, “Quix” respectivamente y en orden de aparición.

*/





function divisible(numeroInicial) {
    
    let resultadoDivisible = "";


    if(numeroInicial % 3 == 0){
        resultadoDivisible += "Foo";
    }
    if(numeroInicial % 5 == 0){
        resultadoDivisible += "Bar";
    };
    if(numeroInicial % 7 == 0){
        resultadoDivisible += "Quix";
    }

    return resultadoDivisible;

};



function repeticiones(numeroInicial) {

    let resultadoRepeticiones = ""; 

    let numberAsArray = numeroInicial.toString().split("");

    numberAsArray.forEach(function(element){
        
        switch (element) {
            case "3":
            resultadoRepeticiones += "Foo";
            break;
            
            case "5":
            resultadoRepeticiones += "Bar";
            break;
            
            case "7":
            resultadoRepeticiones += "Quix";
            break;        
        }

    });

    return resultadoRepeticiones;
}



function main(numeroInicial) {

    if ((numeroInicial < 1) || (numeroInicial > 100)) {
        console.log("Introduzca un número válido. Entre 1 y 100");
    };

    let resultadoDivisible = divisible(numeroInicial);

    let resultadoRepeticiones = repeticiones(numeroInicial);

    let resultadoFinal = resultadoDivisible + resultadoRepeticiones;

    if (resultadoFinal){
        console.log("El resultado es: " + resultadoFinal)
        
    }else{
        
        console.log("El resultado es: " + numeroInicial);

    }

  
};

main(33);









