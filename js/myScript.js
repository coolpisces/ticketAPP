function sehirSec() {
    let sehir = document.getElementById("sehirSelect");
    let sehirButon = document.getElementById("sehirButon");
    sehirButon.innerHTML = 'Seçili Şehir <br> <span class="fw-bold">' + sehir.value + '</span>';

}

function sinemaSecim(id, ad, tarih, saat) {
    let bilet = document.getElementById("bilet");
    let afis = document.getElementById("afis");
    let film = document.getElementById(id).src.substr(22);

    document.getElementById("bilet-img").src = film;
    document.getElementById("bilet-title").innerHTML = ad;
    document.getElementById("tarih").innerHTML = tarih;
    document.getElementById("saat").innerHTML = saat;

    afis.style.display = "none";
    bilet.style.display = "flex";

}
function kapat() {
    document.getElementById("sehirSec-buton").innerHTML = "Kapat";
}