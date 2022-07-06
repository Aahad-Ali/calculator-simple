var input;

function value1() {
    var value = 1;
    display(value)
}
function value2() {
    var value = 2;
    display(value)
}
function value3() {
    var value = 3;
    display(value)
}
function value4() {
    var value = 4;
    display(value)
}
function value5() {
    var value = 5;
    display(value)
}
function value6() {
    var value = 6;
    display(value)
}
function value7() {
    var value = 7;
    display(value)

}
function value8() {
    var value = 8;
    display(value)
}
function value9() {
    var value = 9;
    display(value)
}
function minus() {
    var value = "-";
    display(value)
}
function divide() {
    var value = "/";
    display(value)
}
function multiply() {
    var value = "*";
    display(value)
}
function dout() {
    var value = ".";
    display(value)
}
function equal() {
    var value = "=";
    display(value)
}
function plus() {
    var value = "+";
    display(value)
}
function value0() {
    var value = 0;
    display(value)
}
function value00() {
    var value = 00;
    display(value)
}

function display(v) {
    if (v === "=") {
        input = document.getElementById("display");
        var data = input.innerText;
        var total = eval(data);
        document.getElementById("display").innerText = total;
    }
    else {
        document.getElementById("display").innerText += v;
    }
}
function emp() {
     total = 0; 
}
