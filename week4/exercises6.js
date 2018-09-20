// //
// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
//  Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling 
//  besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata
//   "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan 
//   kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(str) {
    var max = ''
    var a = 0 //membandingkan huruf
    var b = str.split(' ') //membagi kalimat jadi kata
    var word = 0;

    for (let i = 0; i < b.length; i++) { //melooping kata
        max = b[i]
        for (j = 0; j < b[i].length; j++) { //melooping huruf
            arrWord = max[j];
            for (k = 0; k < max.length; k++) { //melooping huruf yg sama
                if ((j !== k) && (arrWord === max[k])) { //menentukan jumlah huruf yg sama
                    word++
                }
            }
        }
        if (word > a) { //menetukan kata pertama dari huruf yg sama
            a = word;
            b = max;
        }

    }
    if (a > 0) {
        return b;
    }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
