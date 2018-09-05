//nama yang dipilih adalah Miyu
//peran yang dipilih adalah ksatria

var nama = 'Miyu';
var peran = 'ksatria';

//1. cek nama ada atau tidak? apabila kosong maka ke langkah 1a, jika tidak maka ke langkah 2
if (nama === '') {
    // 1a. tampilkan nama harus diisi
    console.log ("nama harus diisi");
} 
//2. cek peran apakah ada atau tidak?
else if (peran === '' ){
    //2a. jika peran kosong
    console.log("silahkan isi peranmu")
} 
//3. cek apakah nama dan peran terisi
else {
    //3a. nama & peran diisi
    console.log ("selamat datang di dunia Proxytia, "+nama+"")
    //pengecekan peran sesuai opsi
    switch (peran) {
        case 'ksatria':
            console.log("halo "+nama+", kamu dapat menyerang dengan senjatamu")
            break;
        case 'tabib':
            console.log("halo tabib "+nama+", kamu akan membantu temanmu yang terluka")
            break;
        case 'penyihir':
            console.log("halo penyihir "+nama+", ciptakan keajaiban untuk membantu kemenanganmu")
            break;
        default:
            break;
    }
}
