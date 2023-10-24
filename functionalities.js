let table = [];
let hand = [document.getElementById("hand1"),document.getElementById("hand2")]

function initializer(){
    switcher("table1","back","card")
    switcher("table2","back","card")
    switcher("table3","back","card")
    switcher("table4","back","card")
    switcher("table5","back","card")
    switcher("hand1","back","card")
    switcher("hand2","back","card")
}
function switcher(picID,value,suit){
    const picture = document.getElementById(picID);
    picture.src = `PNG-cards-1.3/${value}_of_${suit}.png`;
}
function clicked(){
    alert("Been clicked")
}
window.addEventListener('load',initializer);
const heartButton = document.getElementById("button");
heartButton.addEventListener('click',switcher("hand1","5","hearts"))
