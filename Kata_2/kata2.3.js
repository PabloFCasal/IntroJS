// * Hacer un validador de números romanos


function romanNumberValidator(romanNumber) {

    let result;
    let pattern = /(^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)/;
    result = pattern.exec(romanNumber);
    console.log(result);

    if(result){
        result = "valid";
    }else{

        result = "NOT valid";
    }
    return result;

}

let romanNumber = "MXIX";


console.log(`The roman number: ${romanNumber} is ` + romanNumberValidator(`${romanNumber}`));