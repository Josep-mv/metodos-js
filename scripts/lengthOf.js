function lengthOf(cadena) {
    // Verificar si la cadena es vacía
    if (cadena === "") {
        return "Invalid input";
    } else {
        // Si la cadena no es vacía, retornar su longitud
        return cadena.length;
    }
}

// Ejemplos de uso
console.log(lengthOf("Hola mundo")); // Salida: 10
console.log(lengthOf("")); // Salida: "Invalid input"