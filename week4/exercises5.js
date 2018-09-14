// //Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan 
// huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, 
// dan z menjadi a
// 
function ubahHuruf(str) {
    var abjad = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var hasil = ""
    for (let i = 0; i < str.length; i++) {
        for (let a = 0; a < abjad.length; a++) {
            if (str[i] === abjad[a]) {
                hasil += abjad[a+1]
            }
        }
    }

    return hasil
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu