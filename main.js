console.log("Hello World !!!");
console.log('Mình mới bắt đầu học Javascript.');
// alert("Wellcome to !!!")



/*
 - Biến : var
 - Dấu "=" là phép gán

*/
/*
    *Kiểu dữ liệu :
    - string
    - number
    - boolean: true/false
    - undefined : Tạo ra biến không có giá trị
    - null
*/

var username = "myclass";
console.log(username);


var num_Std = 30 ;
console.log(num_Std);

//Khai báo cho biến
//undefined (biến ko giá trị)
var tong ;

//Gán giá trị cho biến

var tong = 100;

console.log(tong);

var isLogin = true ;
console.log(isLogin);

var address = null ;
console.log(address);




/*
   * Các loại toán tử :

    - " + " : cộng số/nối chuỗi
    - " + " " - " " * " " / " " % "
    - (++) : tăng 1 đơn vị
    - (--) : giảm 1 đơn vị
*/


var a = 12 ;
var b = 3 ;

// Cộng số
var cong = a + b;
var ketquacong = "Cộng là : " +cong ;
console.log(ketquacong);
// Nối chuỗi
var a = 12 ;
var b = "3" ;

var cong = a + b;
var chuoi = "chuỗi: " +cong ;
console.log(chuoi);


var tru = a - b ;
var KQTru = "Trừ là : " +tru ;
console.log(KQTru);

var nhan = a*b;
var KQNhan = "Nhân là:" +nhan ;
console.log(KQNhan);

var chia = a / b;
var KQChia = "Chia là: " +chia;
console.log(KQChia);


var c = 11 ;
var d = 2 ;

var phanDu = 11 % 2 ;
var chialaydu = "Chia lấy dư: " +phanDu;
console.log(chialaydu);



var count = 0;
//var newCount = count + 1 ;

//var newCount = ++count ; //Cộng trước gán sau

var newCount = count++; // Gán trước cộng sau
console.log(newCount);


// +=  -= *= %=
var sum = 0 ;
//sum = sum + 1 ; 
sum += 1 ;
console.log(sum);


// 

var a =3 ;
var b =1 ;
a += b ;
b = b++ + a++ ;
console.log(a,b);


// Hằng số 
// var pi = 3.14 ;
const PI = 3.14 ;  /// ES6 (2015)


//
var a = 2 ;
var b =1;

var c = Math.sqrt(a*a + b*b);
console.log(c);


/*
    tính tổng 3 kí số : n = 123 | 1 + 2 + 3 = 6

    ** Đầu vào :
    - só n : Tạo biến n gán số có 3 ký số

    ** Xử lí 
    - Tách hàng ĐV
    - Tách hàng chục 
    -Tách hàng trăm
    - Cộng lại

    ** Đầu ra : show kết quả

*/


var n =123 ;

var donvi = n%10 ;
var chuc = Math.floor(n%100/10);
var tram = Math.floor(n/100);
var ketQua= donvi + chuc + tram ;
console.log("Tổng 3 kí số là :", ketQua);


///  BÀI TẬP DÌA NHÀ 

/* Bài 1: Tính tiền lương nhân viên
 * đầu vào:
    Lương (m) / 1 ngày : 100.000
    n : Nhập số ngày làm

    * Xử lí:Lấy lương 1 ngày *số ngày làm

    ** Đầu ra : Show kết quả

*/

var m = 100.000 ;
var n = 30 ;
var KQ = m * n;
console.log("Lương : " ,KQ);


/* bài 2:
* đầu vào: Tạo 5 biến gán (số thực)

*Xử lí: Tính trung bình : Cộng tất cả các biến và sau đó chia tất cả cho 5

* Đầu ra : Show kết quả 


*/

var a = 1 ;
var b = -2;
var c = 2.5;
var d = 1/2;
var e = 2/5;

var ketQua = (a + b + c + d + e) /5 ;
console.log("Trung bình là:",ketQua);


/* Bài 3 :
* đầu vào : giá USD (n) :23.500 VND
            tạo biến gán m

* Xử lí:Tính giá tiền sau khi quy đổi
        lấy m*n

*Đầu ra : xuất tiền sau khi quy đổi


*/

var n = 23.500 ;
var m = 555 ;

var ketQua = n * m;
 console.log("Tổng tiền sau khi quy đổi : " +ketQua);


 /* bài 4:
 *đầu vào:Tạo 2 biến gán chiều dài và chiều rộng của HCN


 *Xử lí: DT = dài * rộng
        CV = (dài + rộng)*2

 *Đầu ra: Xuất diện tích và chu vi HCN


 */

 var a = 4;
 var b = 5;
 var DT = a * b ;
 console.log("Diện tích :" +DT);
 var CV = (a+b)*2;
 console.log("Chu vi :" +CV);


 /*bài 5:
 *Đầu vào: tạo biến gán có 2 chữ số



 *Xử lí: - Tách hàng đơn vị
        - Tách hàng chục

 * Đầu ra : Tổng 2 kí số


 */

var n = 17 ;
var donvi = n%10;
var chuc =Math.floor (n/10);
var tong = donvi + chuc ;

console.log("Tổng 2 ký số :" + tong);