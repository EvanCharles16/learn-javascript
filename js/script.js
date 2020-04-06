//---------------------------------------------------------------------//

// Contoh NaN (Not a Number)
const nilaiNaN = 5 * 'a';
console.log(`nilaiNaN adalah ${nilaiNaN}`);
// contoh isNaN 
const apakahNaN = isNaN(nilaiNaN) ? 'nilainya NaN' : 'nilainya bukan NaN';
console.log(apakahNaN);

//---------------------------------------------------------------------//

// Contoh Undefined
let nilaiUndefined;
console.log(`nilai dari variable ini adalah ${nilaiUndefined}`);
// Underfined artinya nilai yang belum diberikan / diisi
const siswa = {}

//---------------------------------------------------------------------//

// Contoh Null
let nilaiNull = null;
console.log(`nilai dari variable nilaiNull adalah ${nilaiNull}`);

const guru = {
    nama: null
}

//---------------------------------------------------------------------//

// Contoh parseInt (memanggil integer yang didepan saja, tidak berlaku titik koma)
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

let nilaiNominalDIdepan = "km 20";
let nilainyaAja2 = parseInt(nilaiNominalDIdepan)
console.log(nilainyaAja2);

//---------------------------------------------------------------------//

// Contoh parseFloat (memanggil float (bilangan desimal) )
let celcius = "34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

//---------------------------------------------------------------------//

// Encode URI
const alamatWebsite = "https://www.google.com?query=belajar html"
console.log(`encode uri ${encodeURI(alamatWebsite)}`);
// Decode URI
const alamatWebsite2 = "https://www.google.com?query=belajar%20html"
console.log(`decode uri ${decodeURI(alamatWebsite2)}`);


//---------------------------------------------------------------------//

// String Object
const nama = "River"
console.log(nama);
console.log(`panjang variable nama adalah ${nama.length}`);
console.log(`karakter ke dua adalah ${nama.charAt(1)}`);
console.log(`fungsi chartAt dengan -1 menghasilkan ${nama.charAt(-1)}`);
console.log(`fungsi chartAt dengan parameter 10 menghasilkan ${nama.charAt(10)}`);

let namaPanjang = nama + " " + 'Huang';
// let namaPanjang2= `${nama} Huang`
console.log(namaPanjang);
// Upper Lower Case
console.log(namaPanjang.toUpperCase());
console.log(namaPanjang.toLowerCase());

//---------------------------------------------------------------------//

// Contoh searching for a substring
const kalimat = "saya ingin jago coding supaya bisa diterima di perusahaan Google";
const kataPencarian = "jago coding";
const kataDidapat = kalimat.indexOf(kataPencarian);
console.log(kalimat)

if (kataDidapat >= 0){
    console.log(`kata ${kataPencarian} ditemukan di index ${kataDidapat}`);
}
else {
    console.log(`kata ${kataPencarian}tidak ditemukan`);
}



if (kalimat.includes(kataPencarian)){
    console.log(`kata ${kataPencarian} ditemukan`);
}
else {
    console.log(`kata ${kataPencarian}tidak ditemukan`);
}

//---------------------------------------------------------------------//

// Contoh Special  Character usually prefix with "\n" (New Line)
console.log('newline \n \n second newline');
console.log('dia berkata "ya itu benar"');

//---------------------------------------------------------------------//

// Number Object
const num = 3.14;
console.log(num.toFixed(1));

//---------------------------------------------------------------------//

//  Array Object
const namaSiswaImpactByte = ['Sony', 'Ozy', 'Indra'];
namaSiswaImpactByte.push('Evan'); //Nambah item di array terakhir
console.log(namaSiswaImpactByte);

namaSiswaImpactByte.pop(); //Kurangin item di array terakhir
console.log(namaSiswaImpactByte);

//---------------------------------------------------------------------//

// Array For...In
for (let siswa in namaSiswaImpactByte) {
    console.log(siswa);
}

for (let index in namaSiswaImpactByte) {
    console.log(namaSiswaImpactByte[index]);
}

//---------------------------------------------------------------------//

//  Array Method Concat
const namaSiswaUIB = ['Agnes', 'Bill', 'River', 'Ariq', 'Ferdinand']
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB);
console.log(namaSiswaGlints);
console.log(namaSiswaImpactByte);

//---------------------------------------------------------------------//

// Array Sorting String
const namaSiswaSort = namaSiswaGlints.sort(function (a, b) {
    console.log(a, b);
    return a - b;
})
console.log(namaSiswaSort.sort()); //Sesuai abjad tetapi jalankan kapital terlebih dahulu (didahulukan)

//  Array Sorting Number / Integer
const numbers = [3, 6, 1, 0, 8, 11, 9];
console.log(numbers.sort())

//---------------------------------------------------------------------//

// Array join 
console.log(namaSiswaGlints.join(', '));

//---------------------------------------------------------------------//

// ForEach
namaSiswaGlints.forEach(siswa => {
    console.log(`nama siswa : ${siswa}`)
})

// namaSiswaGlints.forEach((item,index,array)  => {
//     console.log(item,index,array);
// })

//---------------------------------------------------------------------//

// Array Map
const namaSiswaDenganAsal = namaSiswaGlints.map((item, index, array) => {
    return {
        noId: index + 1,
        name: item,
        asal: 'Batam'
    }
});
console.log(namaSiswaDenganAsal);

const newSiswa = {
    id: 10,
    nama: 'Budi',
    asal: 'Medan'
}
namaSiswaDenganAsal.push(newSiswa)
console.log(namaSiswaDenganAsal);

//---------------------------------------------------------------------//

// Array Find
const find1 = namaSiswaDenganAsal.find((item, index, array) => {
    if (item.name == "Bill")
        return true;
    return false;
});
console.log(find1);

//---------------------------------------------------------------------//

// Array Filter (mengambil yang berasal dr Medan saja selain dari itu tidak ditampilkan)
const find2 = namaSiswaDenganAsal.filter((item, index, array) => {
    if (item.asal == "Medan")
        return true;
    return false;
});
console.log(find2);

//---------------------------------------------------------------------//

// Property Value Shorthand
const name = "Babe";
const lastName = "Gokil";
const kelasnya = "businessman"

//Cara Penulisan 1 (jika namanya sama)
// const person = {
//     name : name,
//     lastName : lastName,
//     kelas : kelasnya
// }

// Cara Penulisan 2
const person = {
    name,
    lastName,
    kelas : kelasnya
}
console.log(person.name);
console.log(person.lastName);



//Object Assign
const bodyMeasure = {
    height : '170cm',
    weight : '80kg',
    kelas : 'pekerja'
}

const databaru = {
    tanggalLahir : '1 Oktober 2001'
}

const personWithMeasure = Object.assign({}, person, bodyMeasure, databaru);
console.log(person);
console.log(bodyMeasure)

console.log(personWithMeasure);

//---------------------------------------------------------------------//