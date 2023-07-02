function sehirSec() {
    const sehir = document.getElementById("sehirSelect");
    const sehirButon = document.getElementById("sehirButon");
    sehirButon.innerHTML = 'Seçili Şehir <br> <span class="fw-bold">' + sehir.value + '</span>';
    document.getElementById("sehirButon").style.border = "none";

}

function sehirMenu() {
    document.querySelector("#offcanvasScrolling").style.display = "flex";
}

const mainPopup = document.querySelector('.main-popup');
const popupClose = document.querySelector('.popup-close');


function sinemaSecim() {
    if (document.getElementById("sehirButon").classList.contains("pasif")) {

        document.getElementById("sehirButon").style.border = "3px solid red";
        mainPopup.style.display = "block";

        popupClose.addEventListener('click', () => {
            mainPopup.style.display = 'none';
        });

        mainPopup.addEventListener('click', e => {
            if (e.target.className === 'main-popup')
                mainPopup.style.display = 'none';
        })
    } else {
        document.getElementById("sinemaAdi").textContent = document.getElementById("sehirButon").textContent;
        const biletTitle = document.getElementById("bilet-title");
        const afis = document.getElementById("afis");
        const hangiFilm = document.getElementById("bilet-title2");
        const menulinks = document.getElementsByClassName("card");
        Array.from(menulinks).forEach((menulink) => {
            menulink.addEventListener("click", () => {

                document.getElementById("bilet-img").src = menulink.firstElementChild.getAttribute("src");
                document.getElementById("bilet-img2").src = menulink.firstElementChild.getAttribute("src");
                biletTitle.textContent = menulink.lastElementChild.children[0].textContent;
                hangiFilm.textContent = menulink.lastElementChild.children[0].textContent;
                hangiFilm.textContent = menulink.lastElementChild.children[0].textContent;
                if (hangiFilm.textContent == "Adalet") {
                    document.getElementById("Adalet").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Özgür Bakar";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Ufuk Özkan";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Çağan Arslan";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Eslem Akar";
                }
                else if (hangiFilm.textContent == "Fleabag") {
                    document.getElementById("Fleabag").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Vicky Jones";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Phoebe Bridge";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = " ";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = " ";
                }
                else if (hangiFilm.textContent == "Joyland") {
                    document.getElementById("Joyland").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Saim Sadiq";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Ali Junejo";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Rasti Farooq";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Alina Khan";
                }
                else if (hangiFilm.textContent == "Kerr") {
                    document.getElementById("Kerr").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Tayfun Pirselimoğlu";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Erdem Şenocak";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Jale Arıkan";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Rıza Akın";
                }
                else if (hangiFilm.textContent == "Obsesyon") {
                    document.getElementById("Obsesyon").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Eray Altay";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Ekin Duymaz";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Ege Kökenli";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Burcu Karakaya";
                }
                else if (hangiFilm.textContent == "Ren Altını") {
                    document.getElementById("RenAltini").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Fatih Akın";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Emilio Sakraya";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Mona Pirzad";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Julia Goldberg";
                }
                else if (hangiFilm.textContent == "Suzume") {
                    document.getElementById("Suzume").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Makoto Shinkai";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Nanoka Hara";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Hokuto Matsumura";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Eri Fukatsu";
                }
                else if (hangiFilm.textContent == "The Flash") {
                    document.getElementById("TheFlash").style.display = "inline";
                    document.getElementById("yonetmen").lastElementChild.textContent = "Andy Muschietti";
                    document.getElementById("oyuncular").lastElementChild.children[0].textContent = "Ben Affleck";
                    document.getElementById("oyuncular").lastElementChild.children[1].textContent = "Ezra Miller";
                    document.getElementById("oyuncular").lastElementChild.children[2].textContent = "Sasha Calle";
                }
                filmDetay.style.display = "inline";
                afis.style.display = "none";
            });
        });
    }
}

function kapat() {
    document.getElementById("sehirSec-buton").innerHTML = "Kapat";
    tutar = 0;
    const div = document.querySelector('#sehirButon');
    div.classList.remove('pasif');
    //document.querySelector("#offcanvasScrolling").setAttribute("data-bs-dismiss", "offcanvas");
    document.querySelector("#offcanvasScrolling").style.display = "none";
}

function geriAl() {
    const bilet = document.getElementById("bilet");
    const afis = document.getElementById("afis");
    bilet.style.display = "none";
    afis.style.display = "flex";
}
let seciliKoltukSayisi = 0;
let toplam = 0;
let tutar = document.getElementById('normalTutar');
let secilenKoltuklar = document.querySelector('#secilenKoltuklar');
const koltuklar = document.querySelector('.koltuklar');

koltuklar.addEventListener('click', e => {
    if (e.target.classList.contains('koltuk') && !e.target.classList.contains('dolu')) {
        e.target.classList.toggle('secilen');


        seciliKoltukSayisi = koltuklar.querySelectorAll('.koltuk.secilen').length;
        let total = seciliKoltukSayisi * 80;
        document.getElementById('normalTutar').innerHTML = total.toString() + ",00 TL";
        toplam = Number(total);
    }
    document.getElementById("sat").style.visibility = "hidden";
    if (document.getElementsByClassName("secilen").length != 0) document.getElementById("onayButonu").classList.remove("disabled");
});



function secimiOnayla() {

    if (document.getElementsByClassName('secilen').length != 0) {
        document.getElementById("sectiniz").innerHTML = "";
        let sayi = document.getElementsByClassName('secilen').length;

        for (let k = 0; k < sayi; k++) {
            document.getElementById("sectiniz").innerHTML += document.getElementsByClassName('secilen')[k].textContent + " -";
        }
        document.getElementById("sat").style.visibility = "visible";
    } else {
        document.getElementById("onayButonu").classList.add("disabled");
        document.getElementById("sat").style.visibility = "hidden";
    }

}

function sat() {


    let secilenKoltuklar = document.getElementById("sectiniz").textContent;

    //document.getElementsByClassName("main-popup").classList.innerHTML = secilenKoltuklar + " koltuk numaralı " + document.getElementById('normalTutar').textContent + " tutarındaki biletinizin/biletlerinizin ödemesi başarıyla gerçekleşmiştir!";
    document.querySelector('.popup-content').lastElementChild.textContent = secilenKoltuklar + " koltuk numaralı " + document.getElementById('normalTutar').textContent + " tutarındaki biletinizin/biletlerinizin ödemesi başarıyla gerçekleşmiştir!";
    document.querySelector('.popup-content').firstElementChild.textContent = "Bilet Satış Onayı!";
    mainPopup.style.display = "block";

    popupClose.addEventListener('click', () => {
        mainPopup.style.display = 'none';
    });

    mainPopup.addEventListener('click', e => {
        if (e.target.className === 'main-popup')
            mainPopup.style.display = 'none';
    })


    document.getElementById("sectiniz").innerHTML = "";
    document.getElementById("sat").style.visibility = "hidden";
    document.getElementById("normalTutar").innerHTML = "00,00 TL";

    const secilenKoltukDurum = document.querySelectorAll('.secilen');


    seciliKoltukSayisi = document.getElementsByClassName("secilen").length;
    for (let i = 0; i < seciliKoltukSayisi; i++) {
        secilenKoltukDurum[i].style.background = "rgb(207, 205, 205)";
        secilenKoltukDurum[i].style.cursor = "not-allowed";
        secilenKoltukDurum[i].classList.remove('secilen');
        secilenKoltukDurum[i].classList.add('dolu');
    }
}

// function yonlendir() {
//     setTimeout("window.location = 'index.html'", 300);
// }
function detayToBilet() {

    filmDetay.style.display = "none";
    bilet.style.display = "flex";
}




