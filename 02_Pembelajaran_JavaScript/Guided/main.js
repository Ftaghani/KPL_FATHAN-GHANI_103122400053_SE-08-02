function ganjilgenap(input) {
    if (input % 2 == 0) {
        return true;
    }

    return false;
}

function absolutevalue(input) {
    if (input < 0) {
        return -input;
    }

    return input;
}
let apakahgenap = ganjilgenap(145);
console.log(apakahgenap);