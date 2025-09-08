// CARA MEMBUAT VARIABLE
// pada java script ada 3 cara membuat variable var , let , const
// var = umumnya untuk membuat variable. namum ini sudah jarang di pakai karna tebilang jadul
// let = sama seperti var, untuk sekarang let adalah variable yang lebih sering di gunakaan prgramer untuk membaat variable
// const = ini biasa kita gunakan untuk mambuat valuenya tetap. jadi nantinya tidak bisa di ubah valuenya. berbeda dengan var dan let

// TIPE DATA PADA VARIABLE
// variable bisa menampung type data seperti : String, Integent/Number, Boolean, Array, Object
// untuk sekarang saya belajar String, Number, dan Boolean

let a = "a";
let b = "b";
const c = "c";

let nama = "Maul"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
const kelamin = "laki-laki";
console.log(nama +" "+ umur +" "+ kelamin +" "+ apakahBenar);
kelamin = "wanita";
console.log(nama +" "+ umur +" "+ kelamin +" "+ apakahBenar); // disni akan terjadi eror jika di run. kenapaa?? karna kita menggati value "kenamin".
                                                              // sedangkan var kelamin kita buat menggunakan const(tetap).jadi kita tidak bisa mengubah isinya

// KAPAN UNTUK MENGGUNAKAN VAR, LET, CONST
//1. selalu deklarasikan variable
//2. jika nilainya tidak boleh di ubah selalu gunakan CONST
//3. selalu gunakan let karna var bisa di bilang kuno
//4. jadi sekarang hanya ada let dan constSS