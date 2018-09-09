
function xo(str) {
    var cekX = 0
    var cekO = 0
    for (var x = 0; x < str.length; x++) {
        if (str[x] == 'x') {
            cekX++
        } else {
            cekO++
        }
    }

    if (cekX == cekO) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true