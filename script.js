document.addEventListener("DOMContentLoaded", genSquares);
const divs = document.querySelector(".grade1");



function drawSquares() {
    var sqrs = 150
    while(sqrs > 100){
        sqrs = window.prompt("How many squares?")
    }

}

function genSquares() {
    var div = document.querySelector("#grade")
    var s = 16
    for(i=0; i < s; i++) {
        div.innerHTML += `<div class="grade1" id="g${i}" onmouseover="trocarCor(${i})" onmouseout="voltarCor${i}"></div>`
    }
    var item = 1
}

function trocarCor(id) {
    var grade = document.querySelector(`#g${id}`)
    grade.setAttribute("class", "grade1 cor");
}

function voltarCor(id) {
    var grade = document.querySelector(`#g${id}`)
    grade.setAttribute("class", "grade1");
}