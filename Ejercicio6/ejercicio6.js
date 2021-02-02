const notas =[6, 7, 2, 9, 3, 4, 5, 8, 2, 5, 7]

let acc = 0
for (let i = 0; i < notas.length; i++) {
    acc += notas[i];
}
console.log("Con el bucle for la puntuación final es " + acc)

let puntuacion = 0
for (let nota of notas) {
    puntuacion += nota;
}
console.log("Con el bucle for-of la puntuación final es " + puntuacion)