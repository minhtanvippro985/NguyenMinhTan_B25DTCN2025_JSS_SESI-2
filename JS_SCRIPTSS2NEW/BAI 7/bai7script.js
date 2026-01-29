let userName ;
let userRole = prompt("Nhap chuc cua ban \n 1.admin \n 2.student");
userRole = userRole.trim()
let roleBool = userRole ;
let moneyAccount = 36000 ;

let hasCard = "true" ;
let overdue = +prompt("nhap so ngay qua han : 0 - 10 ") ;
let allowance ;


if(userRole !== "admin" && userRole !== "student" ){
    userName = "";
    roleBool = "guest";
    hasCard = "false" ;
    alert("hello... GUEST... , ban chi co the doc tai cho");
} else if(userRole == "admin"){
    alert("chao admin , ban co toan quyen");
    userName = prompt("Nhap ten nguoi dung");
    userName = userName.trim()
} else if(userRole = "student"){
    alert("chao sinh vien! , ban co the muon sach");
    userName = prompt("Nhap ten nguoi dung");
    userName = userName.trim()
}



if((hasCard == "true") && (userRole == "student" || userRole === "admin" ) && (moneyAccount > 0)){
    alert("Duoc phep muon sach");
    allowance = "duoc phep muon"
} else {
    alert("khong du dieu kien");
    allowance = "khong duoc phep muon"
}




// if((moneyAccount - (5*5000)) <= "0") {
//     alert("cam on ban da tra dung han")
// } else if() {

// }

let fineAmount = 0;
let statusMessage = "";

if (overdue <= 0) {
    statusMessage = "cam on da tra dung han!";
    fineAmount = 0;
} else if (overdue >= 1 && overdue <= 5) {
    fineAmount = overdue * 5000;
    statusMessage = `qua han ${overdue} ngay`;
} else if (overdue >= 6 && overdue <= 10) {
    fineAmount = overdue * 10000;
    statusMessage = `qua han ${overdue} ngay`;
} else {
    fineAmount = 200000;
    statusMessage = `qua han ${overdue} ngay - tai khoan bi khoa`;
}



console.log(`Nguoi dung ${userName}\n
    Quyen han : ${userRole}  \n Ket qua muon : ${allowance} \n
    Tinh trang tra sach qua han ${overdue} ngay \n
    Tien phat ${fineAmount}` );

alert(`Nguoi dung ${userName}\n
    Quyen han : ${userRole}  \n Ket qua muon : ${allowance} \n
    Tinh trang tra sach qua han ${overdue} ngay \n
    Tien phat ${fineAmount}` );


