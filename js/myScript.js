const sehir = document.getElementById("sehirSelect");
const sehirButon = document.getElementById("sehirButon");
function sehirSec() {
    sehirButon.innerHTML = 'Seçili Şehir <br> <span class="fw-bold">' + sehir.value + '</span>';
    sehirButon.style.border = "none";
}
function sehirMenu() {
    document.querySelector("#offcanvasScrolling").style.display = "flex";
}
const mainPopup = document.querySelector('.main-popup');
const popupClose = document.querySelector('.popup-close');
function sinemaSecim() {
    if (sehirButon.classList.contains("pasif")) {
        mainPopup.style.display = "block";
        popupClose.addEventListener('click', () => {
            mainPopup.style.display = 'none';
            sehirButon.setAttribute('style',
                'border: 3px solid tomato;animation: titre 0.82s cubic-bezier(.36, .07, .19, .97) both;transform: translate3d(0, 0, 0); backface - visibility: hidden; perspective: 1000px;');
        });
        mainPopup.addEventListener('click', e => {
            if (e.target.className === 'main-popup') {
                mainPopup.style.display = 'none';
                sehirButon.setAttribute('style',
                    'border: 3px solid tomato;animation: titre 0.82s cubic-bezier(.36, .07, .19, .97) both;transform: translate3d(0, 0, 0); backface - visibility: hidden; perspective: 1000px;');
            }
        });

    } else {
        document.getElementById("sinemaAdi").textContent = sehirButon.textContent;
        const biletTitle = document.getElementById("bilet-title");
        const afis = document.getElementById("afis");
        const hangiFilm = document.getElementById("bilet-title2");
        const cards = document.getElementsByClassName("card");
        const yonetmen = document.getElementById("yonetmen");
        const oyuncular = document.getElementById("oyuncular");
        Array.from(cards).forEach((card) => {
            card.addEventListener("click", () => {
                document.getElementById("bilet-img").src = card.firstElementChild.getAttribute("src");
                document.getElementById("bilet-img2").src = card.firstElementChild.getAttribute("src");
                biletTitle.textContent = card.lastElementChild.children[0].textContent;
                hangiFilm.textContent = card.lastElementChild.children[0].textContent;
                hangiFilm.textContent = card.lastElementChild.children[0].textContent;
                if (hangiFilm.textContent == "Adalet") {
                    document.getElementById("Adalet").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Özgür Bakar";
                    oyuncular.lastElementChild.children[0].textContent = "Ufuk Özkan";
                    oyuncular.lastElementChild.children[1].textContent = "Çağan Arslan";
                    oyuncular.lastElementChild.children[2].textContent = "Eslem Akar";
                }
                else if (hangiFilm.textContent == "Fleabag") {
                    document.getElementById("Fleabag").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Vicky Jones";
                    oyuncular.lastElementChild.children[0].textContent = "Phoebe Bridge";
                    oyuncular.lastElementChild.children[1].textContent = " ";
                    oyuncular.lastElementChild.children[2].textContent = " ";
                }
                else if (hangiFilm.textContent == "Joyland") {
                    document.getElementById("Joyland").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Saim Sadiq";
                    oyuncular.lastElementChild.children[0].textContent = "Ali Junejo";
                    oyuncular.lastElementChild.children[1].textContent = "Rasti Farooq";
                    oyuncular.lastElementChild.children[2].textContent = "Alina Khan";
                }
                else if (hangiFilm.textContent == "Kerr") {
                    document.getElementById("Kerr").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Tayfun Pirselimoğlu";
                    oyuncular.lastElementChild.children[0].textContent = "Erdem Şenocak";
                    oyuncular.lastElementChild.children[1].textContent = "Jale Arıkan";
                    oyuncular.lastElementChild.children[2].textContent = "Rıza Akın";
                }
                else if (hangiFilm.textContent == "Obsesyon") {
                    document.getElementById("Obsesyon").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Eray Altay";
                    oyuncular.lastElementChild.children[0].textContent = "Ekin Duymaz";
                    oyuncular.lastElementChild.children[1].textContent = "Ege Kökenli";
                    oyuncular.lastElementChild.children[2].textContent = "Burcu Karakaya";
                }
                else if (hangiFilm.textContent == "Ren Altını") {
                    document.getElementById("RenAltini").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Fatih Akın";
                    oyuncular.lastElementChild.children[0].textContent = "Emilio Sakraya";
                    oyuncular.lastElementChild.children[1].textContent = "Mona Pirzad";
                    oyuncular.lastElementChild.children[2].textContent = "Julia Goldberg";
                }
                else if (hangiFilm.textContent == "Suzume") {
                    document.getElementById("Suzume").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Makoto Shinkai";
                    oyuncular.lastElementChild.children[0].textContent = "Nanoka Hara";
                    oyuncular.lastElementChild.children[1].textContent = "Hokuto Matsumura";
                    oyuncular.lastElementChild.children[2].textContent = "Eri Fukatsu";
                }
                else if (hangiFilm.textContent == "The Flash") {
                    document.getElementById("TheFlash").style.display = "inline";
                    yonetmen.lastElementChild.textContent = "Andy Muschietti";
                    oyuncular.lastElementChild.children[0].textContent = "Ben Affleck";
                    oyuncular.lastElementChild.children[1].textContent = "Ezra Miller";
                    oyuncular.lastElementChild.children[2].textContent = "Sasha Calle";
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
    const div = sehirButon;
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
const secilenKoltuklar = document.querySelector('#secilenKoltuklar');
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
    const popupContent = document.querySelector('.popup-content');
    let secilenKoltuklar = document.getElementById("sectiniz").textContent;
    popupContent.lastElementChild.textContent = secilenKoltuklar + " koltuk numaralı " + document.getElementById('normalTutar').textContent + " tutarındaki biletinizin/biletlerinizin ödemesi başarıyla gerçekleşmiştir!";
    popupContent.firstElementChild.textContent = "Bilet Satış Onayı!";
    popupContent.firstElementChild.classList.remove('text-danger');
    popupContent.firstElementChild.classList.add('text-success');
    mainPopup.style.display = "block";
    popupClose.addEventListener('click', () => {
        mainPopup.style.display = 'none';
    });
    mainPopup.addEventListener('click', e => {
        if (e.target.className === 'main-popup')
            mainPopup.style.display = 'none';
    })
    const secilenKoltukDurum = document.querySelectorAll('.secilen');
    document.getElementById("sectiniz").innerHTML = "";
    document.getElementById("sat").style.visibility = "hidden";
    document.getElementById("normalTutar").innerHTML = "00,00 TL";
    seciliKoltukSayisi = document.getElementsByClassName("secilen").length;
    for (let i = 0; i < seciliKoltukSayisi; i++) {
        secilenKoltukDurum[i].style.background = "rgb(207, 205, 205)";
        secilenKoltukDurum[i].style.cursor = "not-allowed";
        secilenKoltukDurum[i].classList.remove('secilen');
        secilenKoltukDurum[i].classList.add('dolu');
    }
}

function detayToBilet() {
    filmDetay.style.display = "none";
    bilet.style.display = "flex";
}




