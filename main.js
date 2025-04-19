let dollar = document.getElementById("dollar");
let egp = document.getElementById("pound");

dollar.onkeyup = function () {
    egp.value = dollar.value * 51.13;
    if (dollar.value == "") {
        egp.value = "";
    }
}

egp.onkeyup = function () {
    dollar.value = egp.value / 51.13;
    if (egp.value == "") {
        dollar.value = "";
    }
}