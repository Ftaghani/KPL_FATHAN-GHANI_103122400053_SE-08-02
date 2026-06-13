function div(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') { 
            throw new TypeError ("Salah tipe data untuk argumen a"); 
    }

    if (b == 0) {
        return 0;
    }

    const hasil = a/b;

    if (hasil * b == a) {
        return hasil;
    }

    return 0;
}

console.log(
    di(20, 40)
);