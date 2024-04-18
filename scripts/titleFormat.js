function titleFormat(cadena) {
    // Verificar si la cadena es vacía
    if (cadena === "") {
        return "Invalid input";
    } else {
        // Obtener la primera letra en mayúsculas y el resto del título en minúsculas
        const primeraLetraMayuscula = cadena.charAt(0).toUpperCase();
        const restoDelTituloMinusculas = cadena.slice(1).toLowerCase();

        // Concatenar ambas partes
        const tituloFormateado = primeraLetraMayuscula + restoDelTituloMinusculas;

        return tituloFormateado;
        // Retornar la longitud de la cadena formateada
        //return tituloFormateado.length;
    }
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world")); 
console.log(titleFormat("HellO WOrLd"));