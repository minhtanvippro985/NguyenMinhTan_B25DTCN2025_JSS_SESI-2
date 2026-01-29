let bookName = prompt("Nhập tên sách của bạn vào đây:");
let bookStatus = +prompt("Nhập trạng thái của sách \n 1. Có sẵn \n 0. Đã mượn");
let bookYear = +prompt("Nhập năm xuất bản:");

let currentYear = new Date().getFullYear();
let age = currentYear - bookYear;


if (bookStatus === 1) {

    if (age <= 5) {
        alert("Sách này mới và có sẵn để mượn");
    } else {
        alert("Sách này có sẵn nhưng đã lâu năm");
    }
} else if (bookStatus === 0) {

    if (age <= 10) {
        alert("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    } else {
        alert("Sách này đã mượn và khá cũ");
    }
} else {
    alert("Lựa chọn trạng thái không hợp lệ!");
}