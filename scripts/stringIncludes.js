function stringIncludes(cadena1,cadena2){
    if(cadena1 === "" || cadena2 === ""){
        return "Invalid input";
    } else {
        if(cadena2.includes(cadena1)){
            return true;
        } else {
            return false;
        }
    }
}
console.log(stringIncludes("he","Hello")); //debe imprimir false
console.log(stringIncludes("he","hello world")); //debe imprimir true.