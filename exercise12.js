
function konversiMenit(menit) {
    var hour = menit / 60
    var minutes = menit % 60
    var result
    if (minutes.toString().length === 1) {
        result = parseInt(hour) + ":0" + minutes
    } else {
        result = parseInt(hour) + ":" + minutes
    }

    return result
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


