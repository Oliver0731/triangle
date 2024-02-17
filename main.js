document.getElementById("btn").addEventListener("click", calcP);

//calc dist btween points
function dist(x1, y1, x2, y2){
   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }



    //output
function calcP() {
    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

let AB = dist(xA, yA, xB, yB);
let BC = dist(xB, yB, xC, yC);
let AC = dist(xA, yA, xC, yC);
let perimeter = AB + BC + AC;
document.getElementById("output").innerHTML = "Perimiter:" + Math.round(perimeter);
    }
