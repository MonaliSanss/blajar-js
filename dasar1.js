// cara membuat variable
var a = "a";
let b = "b";
const c = "c";

//variable bisa menampung type data string(text), integent/number, boolean, array, object,

let nama = "Maul"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number namun ada koma

// Operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);

let penampunganHasilOperatorAritmatika = angka1 + angka2;
console.log(penampunganHasilOperatorAritmatika); //30

penampunganHasilOperatorAritmatika = angka1 - angka2;
console.log(penampunganHasilOperatorAritmatika); //-10

penampunganHasilOperatorAritmatika = angka1 / angka2;
console.log(penampunganHasilOperatorAritmatika); //0,5

penampunganHasilOperatorAritmatika = angka1 * angka2;
console.log(penampunganHasilOperatorAritmatika); //200

//String juga bisa ditambah namun tidak bisa di kurang dengan operator aritmatika

let firstName = "Maulana";
let lastName = "Aryadi";
let fullName = firstName +" "+ lastName;

console.log(firstName);
console.log(fullName);
console.log(firstName +" "+ lastName);

//alur pembacaan code
//untuk membaca code itu dari kiri ke kanan, dan dari atas ke bawah
//contoh

let number = 20;
console.log(number+10); //30
number = 30;
console.log(number-10); //20
//kenapa di console ke 2 jadi 20?. karna variable number di atas sudah kita tetapkan menjadi 30
//seperti cara pembacaan codenya variable number di line 48 sudah tidak berlaku dan di gantinkan nilainya dengan varible number di line 50

let number1 = false;
console.log(number1+10); //10
//kenapa false - 10 tetap menjadi 10??? karena dalam bahasa pmograman false = 0, dan true = 1;
console.log(true+10); //11
console.log(false+10); //10


// MEMBACA ERROR
// jangan takut dengan eror, takutlah jika code kalian tidak memiliki eror. karna nantinya jika ada bug pada suatu sistem tapi tidak ada eror
// kalian malah akan pusing mencari letak erornya dimana

// CONTOH ERROR
const hewan = "jeraph";
console.log(hewan);
hewan = "gajah";

//disini jika kalian jalankan akan terjadi error
//kenapa bisa error ?? karna variable const tidak bisa di ubah nilainya
//dan pada console nanti akan di arahkan letak erornya. jadi kita ga perlu takut dengan error