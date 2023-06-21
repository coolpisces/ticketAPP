function sehirSec() {
    let sehir = document.getElementById("sehirSelect");
    let sehirButon = document.getElementById("sehirButon");
    sehirButon.innerHTML = 'Seçili Şehir <br> <span class="fw-bold">' + sehir.value + '</span>';

}

function sinemaSecim() {
    let bilet = document.getElementById("bilet");
    let biletTitle = document.getElementById("bilet-title");
    let afis = document.getElementById("afis");
    //let film = document.getElementById(id).src.substr(22);

    let menulinks = document.getElementsByClassName("card");
    Array.from(menulinks).forEach((menulink) => {
        menulink.addEventListener("click", () => {
            document.getElementById("bilet-img").src = menulink.firstElementChild.getAttribute("src");
            biletTitle.textContent = menulink.lastElementChild.children[0].textContent;
        });
    });

    /*
    let bilet = document.getElementById("bilet");
    let afis = document.getElementById("afis");
    let film = document.getElementById(id).src.substr(22); 

    document.getElementById("bilet-img").src = film;
    document.getElementById("bilet-title").innerHTML = ad;
    document.getElementById("tarih").innerHTML = tarih;
    document.getElementById("saat").innerHTML = saat; */

    bilet.style.display = "flex";
    afis.style.display = "none";
}
function kapat() {
    document.getElementById("sehirSec-buton").innerHTML = "Kapat";
}