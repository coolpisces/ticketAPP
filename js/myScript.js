function sehirSec() {
    let sehir = document.getElementById("sehirSelect");
    let sehirButon = document.getElementById("sehirButon");
    sehirButon.innerHTML = 'Seçili Şehir <br> <span class="fw-bold">' + sehir.value + '</span>';

}

function sinemaSecim() {
    try {
        if (document.getElementById("sehirButon").classList.contains("pasif")) {
            alert("Öncelikle bulunduğunuz şehri seçin!")
        } else {
            document.getElementById("sinemaAdi").textContent = document.getElementById("sehirButon").textContent;
            let bilet = document.getElementById("bilet");
            let biletTitle = document.getElementById("bilet-title");
            let biletTitle2 = document.getElementById("bilet-title2");
            let afis = document.getElementById("afis");

            let menulinks = document.getElementsByClassName("card");
            Array.from(menulinks).forEach((menulink) => {
                menulink.addEventListener("click", () => {
                    document.getElementById("bilet-img").src = menulink.firstElementChild.getAttribute("src");
                    document.getElementById("bilet-img2").src = menulink.firstElementChild.getAttribute("src");
                    biletTitle.textContent = menulink.lastElementChild.children[0].textContent;
                    biletTitle2.textContent = menulink.lastElementChild.children[0].textContent;
                    filmDetay.style.display = "inline";
                    afis.style.display = "none";
                });
            });
        }


    }
    catch (err) {
        throw err.textContent;
    }
}


function kapat() {
    document.getElementById("sehirSec-buton").innerHTML = "Kapat";
    tutar = 0;
    let div = document.querySelector('#sehirButon');
    div.classList.remove('pasif');
}

function geriAl() {
    let bilet = document.getElementById("bilet");
    let afis = document.getElementById("afis");
    bilet.style.display = "none";
    afis.style.display = "flex";
}
let seciliKoltukSayisi = 0;
let toplam = 0;
let tutar = document.getElementById('normalTutar');
let secilenKoltuklar = document.querySelector('#secilenKoltuklar');
const koltuklar = document.querySelector('.koltuklar');

koltuklar.addEventListener('click', (e) => {
    if (e.target.classList.contains('koltuk') && !e.target.classList.contains('dolu')) {
        e.target.classList.toggle('secilen');

        seciliKoltukSayisi = koltuklar.querySelectorAll('.koltuk.secilen').length;
        let total = seciliKoltukSayisi * 80;
        document.getElementById('normalTutar').innerHTML = total.toString() + ",00 TL";
        toplam = Number(total);

    }

});



function secimiOnayla() {
    if (toplam == 0)
        alert("Önce bilet seçmelisiniz!"); else {
        document.getElementById("sectiniz").innerHTML = "";
        let sayi = document.getElementsByClassName('secilen').length;
        for (let k = 0; k < sayi; k++) {
            document.getElementById("sectiniz").innerHTML += document.getElementsByClassName('secilen')[k].textContent + " -";
        }
        document.getElementById("sat").style.visibility = "visible";



    }

}

function sat() {


    let secilenKoltuklar = document.getElementById("sectiniz").textContent;


    alert(secilenKoltuklar + " koltuk numaralı " + document.getElementById('normalTutar').textContent + " tutarındaki biletinizin/biletlerinizin ödemesi başarıyla gerçekleşmiştir! 3 saniye sonra Anasayfaya yönlendirileceksiniz...");
    document.getElementById("sectiniz").innerHTML = "";
    document.getElementById("sat").style.visibility = "hidden";
    document.getElementById("normalTutar").innerHTML = "00,00 TL";

    seciliKoltukSayisi = document.getElementsByClassName("secilen").length;
    for (let i = 0; i < seciliKoltukSayisi; i++) {
        document.getElementsByClassName("secilen")[i].style.background = "rgb(207, 205, 205)";
        document.getElementsByClassName("secilen")[i].style.cursor = "not-allowed";
    }

    setTimeout("window.location = 'index.html'", 3000);

}
function detayToBilet() {

    filmDetay.style.display = "none";
    bilet.style.display = "flex";
}

