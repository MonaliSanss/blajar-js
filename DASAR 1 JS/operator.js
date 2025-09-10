//CONDITIONAL STATMENTS

//Gunakan if untuk menentukan blok kode yang akan dieksekusi, jika suatu kondisi tertentu benar
//Gunakan else untuk menentukan blok kode yang akan dieksekusi, jika kondisi yang sama salah
//Gunakan else if untuk menentukan kondisi baru untuk menguji, jika kondisi pertama adalah palsu
//Gunakan switch untuk menentukan banyak blok kode alternatif yang akan dieksekusi

let nilai = 55;

if (nilai >= 75) {
    console.log("lulus");
} else if (nilai >= 65) {
    console.log("remedial");
} else {
    console.log("tidak lulus");
}


//LOGICAL OPERATOR
// Logical And (&&) SEMUA KONDISI HARUS TERPENUHI MAKA AKAN MENGHASILKAN NILAI TRUE
// Logical Or  (||) SALAH SATU KONDISI HARUS TERPENUHI MAKA AKAN MENGHASILKAN NILAI TRUE
// Logical Not (!)

// Contoh Locical And (&&)

if (nilai >= 90 && nilai <= 100) {
    nilai = "A";
} else if (nilai >= 80 && nilai < 90) {
    nilai = "B";
} else if (nilai >= 70 && nilai < 80) {
    nilai = "C";
} else {
    nilai = "D"
}

console.log(nilai);

// Contoh Logical Or (||) dan Not (!)
// Or hanya membutuhkan salah satu kondisi terpenuhi agar menghasilkan nilai true

nilai = 50;

//Or (||)
let perbandingan1 = nilai >= 90 || nilai <=100;
console.log(perbandingan1);
//contoh di atas akan menghasilkan true, dikarenakan salah satu kondisi sudah terpenuhi pada "nilai <= 100;"

//Not (!)
let perbandiangn2 = nilai != 50
console.log(perbandiangn2);
//contoh di atas akan menghasilka false, sebab nilai 50 tidak sama dengan 50 false. karena 50 ya sama dengan 50 ( Agak bingung yah !!!)
//Ya intinya kalo ga sama dia akan menghasilkan (true)
//dan jika sama dia akan menghasilkan (false)


//COMPARISON OPERATOR
/*

==   equal to
===  equal value dan value type
!=   not equal
!==  not equal value or not equal type
>    greater than
<    less than
>=   greater then or equal to
<=   less than or equal to

*/