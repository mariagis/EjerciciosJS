const dni = prompt("Tu DNI")
console.log("dni", dni)

const letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]

if (dni < 0 || dni > 99999999){
    alert("El número no es correcto")
}
else {
    const letraSeleccionada = letra[dni%23];
    alert ("La letra de tu DNI es " + letraSeleccionada);
}