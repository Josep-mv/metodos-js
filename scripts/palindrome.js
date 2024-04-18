function palindrome (cadena){
    if (cadena === "") {
        return "Invalid input";
    } else {
        const arrayCaracteres = cadena.split("");
        const arrayReverso = arrayCaracteres.slice().reverse();
        const cadenaReversa = arrayReverso.join("")
        return cadenaReversa === cadena;
    }
}
console.log(palindrome("hello")) //debe imprimir false
console.log(palindrome("hannah")) //debe imprimir true.

