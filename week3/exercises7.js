function hitungJumlahKata(str) {
    var i = 0;
    var number = 1;

    while (i <= str.length) {
        if (str.substring(i, i + 1)== ' ') {
            number++;
            i++;
        }
        if (str.substring(i, i + 1)=='\n') {
            number++;
            i++;
        }
        i++;
    }
    return number;
  }
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5