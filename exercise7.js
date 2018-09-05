// 1. Menyusun Barisan Bintang

var rows1 = '*';
var counter = 0;
while (counter < 5) {
  console.log(rows1)
  counter = counter + 1
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = '*****';
var counter = 0;
while (counter < 5) {
  console.log(rows2)
  counter = counter + 1
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
function barisanBintang(height) {

  for (var i = 1; i <= height; i++) {
    var rows3 = '';

    for (var j = 1; j <= i; j++) {
      rows3 += '*';
    }

    console.log(rows3);
  }
}

barisanBintang(5);
