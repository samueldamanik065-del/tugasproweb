function hitung(operator) {
    let b1 = Number(document.formhitung.bil1.value);
    let b2 = Number(document.formhitung.bil2.value);
    let output = 0;

    if (operator == '+') {
        output = b1 + b2;
    } else if (operator == '-') {
        output = b1 - b2;
    } else if (operator == '*') {
        output = b1 * b2;
    } else if (operator == '/') {
        output = b1 / b2;
    }

    document.formhitung.hasil.value = output;
}