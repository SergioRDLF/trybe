let a = 90;
let b = 45;
let c = 45;
let soma = a+b+c;
let validação = a > 0 && b > 0 && c > 0;

if (validação) {
    if (soma === 180) {
        console.log(true);
    } else {
    console.log(false);
    }
} else {
    console.log("Angulos invalidos");
}
   