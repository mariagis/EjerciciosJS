const meses= ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const resultado = meses
    .filter (mes => mes.length > 7)
    .map (mes => mes.toUpperCase())

console.log ("resultado", resultado)

const numResultado = resultado.length

console.log ("Son " + numResultado + " meses.")