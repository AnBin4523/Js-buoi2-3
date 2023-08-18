// Bai 1
var btnSalary = document.getElementById("btnSalary");
btnSalary.onclick = function () {
    // Input
    var day = document.getElementById("day").value;

    // Algorithms
    var salary = 100000 * day;

    // Output
    var ketqua = "So luong nhan duoc: " + salary;
    var divSalary = document.getElementById("divSalary");
    divSalary.innerText = ketqua;
    divSalary.classList.add("divSalary");
}

// Bai 2
var btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function () {
    // Input
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;

    // Algorithms
    number1 = Number(number1);
    number2 = Number(number2);
    number3 = Number(number3);
    number4 = Number(number4);
    number5 = Number(number5);

    var sum = number1 + number2 + number3 + number4 + number5;
    var avg = sum / 5;

    // Output
    var ketqua = "Gia tri trung binh: " + avg;
    var divAverage = document.getElementById("divAverage");
    divAverage.innerText = ketqua;
    divAverage.classList.add("divAverage");
}

// Bai 3
var btnExchange = document.getElementById("btnExchange");
btnExchange.onclick = function () {
    // Input
    var dollar = document.getElementById("dollar").value;

    // Algorithms
    var exchange = dollar * 23500;

    // Output
    var ketqua = "So tien nhan duoc: " + exchange;
    var divExchange = document.getElementById("divExchange");
    divExchange.innerText = ketqua;
    divExchange.classList.add("divExchange");
}

// Bai 4
var btnDienTich = document.getElementById("btnDienTich");
btnDienTich.onclick = function () {
    // Input
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    // Algorithms
    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);

    var dienTich = chieuDai * chieuRong;
    
    // Output
    var ketqua = "Dien tich: " + dienTich;
    var divDienTich = document.getElementById("divDienTich");
    divDienTich.innerText = ketqua;
    divDienTich.classList.add("divDienTich");
}

var btnChuVi = document.getElementById("btnChuVi");
btnChuVi.onclick = function () {
    // Input
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    // Algorithms
    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);

    var chuVi = (chieuDai + chieuRong) * 2;

    // Output
    var ketqua = "Chu vi: " + chuVi;
    var divChuVi = document.getElementById("divChuVi");
    divChuVi.innerText = ketqua;
    divChuVi.classList.add("divChuVi");
}

// Bai 5
var btnSum = document.getElementById("btnSum");
btnSum.onclick = function () {
    // Input
    var number = document.getElementById("number").value;

    // Algorithms
    ten = Math.floor(number / 10);
    unit = Math.floor(number % 10);

    sum = ten + unit;

    // Output
    var ketqua = "Tong 2 chu so: " + sum;
    var divSum = document.getElementById("divSum");
    divSum.innerText = ketqua;
    divSum.classList.add("divSum");
}