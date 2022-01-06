// let arr = [];
// let a = prompt("Nhap so a");
// arr.push(a);
// let b = prompt("Nhap so b");
// arr.push(b);
// console.log(arr);
// B1
// 1. Tạo 2 biến là `a` và `b`, gán **10** cho a và **15** cho b. Kiểm tra xem nếu a lớn hơn b thì console trả về gì?
// 2. Kiểm tra a có bằng giá trị **“10”** hay không và trả về cửa sổ console kết quả.
// 3. Kiểm tra lại a có bằng giá trị **“10”** hay không, so sánh cả kiểu dữ liệu.
// 4. Cho `x` bằng **“5”** và `y` bằng **6**, so sánh giá trị **`x !== y`** và cho ra kết quả

// var a = 10;
// var b = Number(a);
// var c = a * 1;
// B2
// var a = 10;
// var b = '';
// if (a) {
//     console.log('a is truthy');
// }

// if (b) {

//     console.log('b is truthy');
// }


// Biểu thức so sánh trong trả về true or false
// let varA;
// TODO
// if(varA){

//}
// lấy giá trị nó trả về
// 
// console.log(`
// 1.Phép +
// 2.Phép -
// 3.Phép *
// 4.Phép /
// `)
// let luachon = parseInt(prompt("Nhap vao phep tinh can su dung"));
// let a = 0;
// let b = 0;

// switch (luachon) {
//     case 1:
//         {
//             console.log("Bạn lựa chọn phép tính +")
//             a = parseInt(prompt("Nhap vao so a"));
//             b = parseInt(prompt("Nhap vao so b"));
//             console.log(a + b);
//             break;
//         }
//     default:
//         {
//             console.log("Bạn Phải Nhập Số");
//         }
// }
// let x = prompt("Nhap vao mot so");
// if (x % 3 == 0) {
//     console.log(`${x}` + " chia hết cho 3");
// } else {
//     console.log(`${x}` + " Không chia hết cho 3");
// }
let a = parseInt(prompt("Nhap vao so a"));
let b = parseInt(prompt("Nhap vao so b"));
let c = parseInt(prompt("Nhap vao so c"));
let min = 0;
while (a && b && c) {
    a--;
    b--;
    c--;
    min++;
}
console.log(min);