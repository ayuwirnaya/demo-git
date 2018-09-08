// 1. Menyusun Barisan Bintang

var rows1 = '*';

for (var i = 0; i <= 5; i++) {

  console.log(rows1);
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;

for (var i = 0; i < 5; i++) {
  var rows2 = '';
  for (var j = 0; j < 5; j++) {
    rows2 += '*';
  }
  console.log(rows2);
  rows2 = '';
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
