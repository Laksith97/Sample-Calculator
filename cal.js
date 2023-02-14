function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
