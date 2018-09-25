function kaliTerusRekursif(num) {
  var kaliTerus = 0

  if (num.toString().length === 1) {
    return num;
  } else {
    kaliTerus = Number(num.toString().substring(0,1));
    for (let i = 1; i < num.toString().length; i++) {
      kaliTerus = kaliTerus * Number(num.toString()[i]);  
    }
    return kaliTerusRekursif(kaliTerus);
  }
}

  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6