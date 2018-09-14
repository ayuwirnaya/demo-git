// //
// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
//  Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling 
//  besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata
//   "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan 
//   kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(str) {
    var isSame = false
    var arrWord = []

    var b = str.split(' ')
    for (var i = 0; i < b.length; i++){
        for(var a = 0; a < b[i].length; a++){
            console.log(b[i])
            // if (b[i] === b[a]) {

            // }
        }
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
//   console.log(hitungHuruf('I am a passionate developer')); // passionate
//   console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//   console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//   console.log(hitungHuruf('mengayuh perahu di danau')); // danau