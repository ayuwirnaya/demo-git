function dataHandling2(arr) {
    

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var iris1 = input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar lampung");
var iris2 = input.splice(4, 1, "Pria", "SMA Internasional Metro");

var potong = input[3].split("/");
var forJoin = input[3].split('/');
var month = '';
var tukar = parseInt(potong[1]);
var gabung = potong.sort((function(value1, value2) { return parseInt (value1) < parseInt(value2) }));
var belah = input[1].slice(0, 14);

console.log(input);
switch (tukar) {
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'February';
      break;
    case 3:
      month = 'Maret';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'Mei';
      break;
    case 6:
      moth = 'Juni';
      break;
    case 7:
      month = 'Juli';
      break;
    case 8:
      month = 'Agustus';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'Oktober';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'Desember';
      break;

}
  console.log(month);
  console.log(potong);
  console.log(forJoin.join(' - '));
  console.log(belah);
}
dataHandling2();