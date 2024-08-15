function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let password1 = getElementById("nombre").value;
let password2 = getElementById("nombre").value;

if (password1 !== password2) {
    showAlertError();
    return;
}
