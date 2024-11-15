var danhSachAnh = [
    './baitaplon/img/nen1.1.jpg',
    './baitaplon/img/nen1.2.jpg',
    './baitaplon/img/nen1.3.jpg',
    './baitaplon/img/nen1.4.jpg',
    './baitaplon/img/nen1.5.jpg',
    './baitaplon/img/nen1.6.jpg',
    './baitaplon/img/nen1.7.jpg',
    './baitaplon/img/1.8.jpg'
];

var index = 0;

function chuyenAnh() {
    index++;
    if (index >= danhSachAnh.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = danhSachAnh[index];
    document.getElementById("dem").innerHTML = "" + index + "/8";
}
var ind = 3;

function chuyenAnhNguoc() {
    if (ind < 0) ind = 3;
    var anh = document.getElementById("anh");
    anh.src = danhSachAnh[ind];
    ind--;
}
setInterval("chuyenAnh()", 2000);