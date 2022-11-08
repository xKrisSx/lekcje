//
// ZADANIE 1
//

let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number(prompt("[tablica #1] Podaj liczbę " + (i + 1))))
}
document.write("#1:<br>")
document.write(array)

document.write("<br><br><br>")

//
// ZADANIE 2
//

let array2 = array.map(e => e * 3)

document.write("#2:<br>")
document.write(array2)

document.write("<br><br><br>")

//
// ZADANIE 3
//

let array3 = array2.filter(e => e < 10)

document.write("#3:<br>")
document.write(array3)

document.write("<br><br><br>")

//
// ZADANIE 4
//

let array4 = []
for (let i = 0; i < 5; i++) {
    array4.push(Number(prompt("[tablica #2] Podaj liczbę " + (i + 1))))
}
let array5 = array4.concat(array3)

document.write("#4:<br>")
document.write(array5)

document.write("<br><br><br>")

//
// ZADANIE 5
//

array5.sort()

document.write("#5:<br>")
document.write(array5)

document.write("<br><br><br>")

//
// ZADANIE 6
//

function fn(arr) {return arr.reduce((total, n) => total + n);}

document.write("#6:<br>")
document.write(fn(array5) / array5.length)

//
// ZADANIE 6
//

function srednia(arr) {
    let a = 0
    arr.forEach(n => {
        a += n
    })
    return a / arr.length
}
document.write(srednia(array5))
