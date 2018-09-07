var angka1 = 5;
var angka2 = 8;
function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
    return true;
  } else {
    return false;
  }
}
console.log(bandingkanAngka(5, 8)); // true

var angka1 = 5;
var angka2 = 3;
function bandingkanAngka(angka1, angka2) {
  if (angka1 > angka2) {
    return true;
  } else {
    return false;
  }
}
console.log(bandingkanAngka(5, 3)); // false

var angka1 = 4;
var angka2 = 4;
function bandingkanAngka(angka1, angka2) {
  if (angka1 === angka2) {
    return true;
  } else {
    return -1;
  }
}
console.log(bandingkanAngka(4, 4)); // -1

var angka1 = 3;
var angka2 = 3;
function bandingkanAngka(angka1, angka2) {
  if (angka1 !== angka2) {
    return false;
  } else {
    return -1;
  }
}
console.log(bandingkanAngka(3, 3)); // -1

var angka1 = 17;
var angka2 = 2;
function bandingkanAngka(angka1, angka2) {
  if (angka1 > angka2) {
    return false;
  } else {
    return true;
  }
}
console.log(bandingkanAngka(17, 2)); // false

  
