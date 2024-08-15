function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function () {
let password1 = document.getElementById("password1").value.trim();
let password2 = document.getElementById("password2").value.trim();

if (password1 !== password2) {
    showAlertError();
    return;
} else {
    showAlertSuccess();
}

});
