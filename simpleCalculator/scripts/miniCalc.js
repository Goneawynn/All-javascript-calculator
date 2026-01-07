let operator = null;
let hasil = null;

function ambilAngka() {
    const num1 = parseFloat(document.getElementById("angka1").value);
    const num2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(num1) || isNaN(num2) ){
        alert("Input yang anda masukkan tidak valid!");
        return null;
    }

    return [num1, num2];
}

function Tambah(num1, num2){
    return num1 + num2;
}

function Kurang(num1, num2){
    return num1 - num2;
}

function Kali(num1, num2){
    return num1 * num2;
}

function Bagi(num1, num2){
    return num1 / num2;
}

document.getElementById("+").addEventListener("click", () =>{
    operator = "+";
});

document.getElementById("-").addEventListener("click", () =>{
    operator = "-";
});

document.getElementById("*").addEventListener("click", () =>{
    operator = "*";
});

document.getElementById("/").addEventListener("click", () =>{
    operator = "/";
});

document.getElementById("hitung").addEventListener("click", () =>{
    console.log(operator);
    const angka = ambilAngka();
    const [num1, num2] = angka;
    // const [num1, num2] = angka;
    

    switch (operator) {
        case "+":
            hasil = Tambah(num1, num2);
            break;
        
        case "-":
            hasil = Kurang(num1, num2);
            break;

        case "*":
            hasil = Kali(num1, num2);
            break;

        case "/":
            hasil = Bagi(num1, num2);
            break;
    
        default:
            hasil = "Kok bisaa??";
            break;
    }

    document.getElementById("jumlah").textContent = hasil;
});