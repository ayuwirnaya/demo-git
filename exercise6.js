// 1. Melakukan Looping Menggunakan While

var kata = 0;
console.log("LOOPING PERTAMA")
while (kata < 20) {
  kata += 2;
  console.log(kata + ' - I love coding');
}
var kata2 = 22;
console.log("LOOPING KEDUA")
while (kata2 > 2) {
  kata2 -= 2;
  console.log(kata2 + ' - I will become fullstack developer');
}

// 2. Melakukan Looping menggunakan FOR

console.log("LOOPING PERTAMA")
for (var kata = 1; kata <= 20; kata++) {
  console.log(kata + ' - i love coding');
}
//
var kata = 0;
console.log("LOOPING KEDUA")
for (var kata = 20; kata > 0; kata--) {
  // if (kata % 2 == 0) {
    console.log(kata + ' - I will become fullstack developer');
  // }
}

// 3. Angka Ganjil dan Genap

for (var i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i, 'ganjil');
  } else {
    console.log (i, 'genap');
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    console.log(i, 'kelipatan 3');
    i += 2;
  }else if(i % 6 == 0) {
    console.log(i, 'kelipatan 6');
    i += 5;
  } else if(i % 10 == 0) {
    console,log(i, 'kelipatan 10');
    i += 9;
  }
  
}
