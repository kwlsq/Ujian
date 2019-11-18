const lelang=(a)=>{
    console.log(lelang(2)) //menit ke 2 hasil 14400 
    console.log(lelang(50)) //menit ke 50 barang habis terjual
    console.log(lelang(49)) //menit ke 49 26697248
}
function hitungHarga (a){
    var hargaAwal = 10000;
    for (var i=1;i<=a;i++){
        if(i%4==0){
            hargaAwal+=Math.ceil(hargaAwal*0.1);
        } else {
            hargaAwal+=Math.ceil(hargaAwal*0.2);
        }
        if(hargaAwal>=30000000){
            return (`Menit ke ${i} barang habis terjual`)
            break;
        }
    }
    return `Menit ke ${i-1} hasilnya ${hargaAwal}`
}
console.log(hitungHarga(50))