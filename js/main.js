function addItem() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    let alertMes = document.getElementById("alertMes");
    if (item.value != "") {
        hideAlert();
        let liOlustur = document.createElement("li");
        liOlustur.appendChild(document.createTextNode(item.value));
        list_item.appendChild(liOlustur);
        item.value = ""
        liOlustur.onmousedown = function () {
            this.parentNode.removeChild(this);
        }
    }
    else {
        alertMes.style.visibility = 'visible';
        alertMes.innerHTML = `    
        <div class="alert alert-danger " role="alert">
        <div class="row justify-content-between align-items-center">
            <div class="col-12">
                Değer girmediniz!
            <button type="button" onclick="hideAlert()" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close">
            </button>
            </div>
            
        </div>
    </div>`;
    }
}
function hideAlert() {
    let alertMes = document.getElementById("alertMes");
    alertMes.style.visibility = 'hidden';
}