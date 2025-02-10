let colors = ["#FF0000", "#FFFFFF", "#00FF00", "#FFFFFF", "#FF0000", "#FFFFFF", "#00FF00", "#FFFFFF", "#FF0000"];
let gameActive = true;  
let lastClick = null;         // Memorizza l'ultima posizione del clic

function setup() {
    let canvas = createCanvas(300, 300);
    canvas.parent('cerchi');
    angleMode(DEGREES);
    document.getElementById('points').innerText = 'COLPISCI!!!';  // Messaggio iniziale
}

function draw() {
    let maxDiameter = width; 
    let numCircles = 9;
    
    // Disegna i cerchi concentrici
    for (let i = 0; i < numCircles; i++) {
        let diameter = maxDiameter - (i * (maxDiameter / numCircles)); 
        fill(colors[i]);
        ellipse(width / 2, height / 2, diameter, diameter); 
    }

    // Disegna una "X" se è stato cliccato un bersaglio
    if (lastClick) {
        drawX(lastClick.x, lastClick.y);
    }
}

function mouseClicked() {
    let centerX = width / 2;
    let centerY = height / 2;
    let distance = dist(mouseX, mouseY, centerX, centerY);  // Calcola la distanza dal centro

    let maxRadius = width / 2;  // Raggio del cerchio più grande (più esterno)

    if (distance <= maxRadius) {  // Se il clic è all'interno del cerchio più grande
        document.getElementById('points').innerText = "Bersaglio colpito!!";
        lastClick = {x: mouseX, y: mouseY};  // Memorizza l'ultima posizione del clic
    } else {
        document.getElementById('points').innerText = "Bersaglio mancato!!";
    }
}

function drawX(x, y) {
    stroke(0);  // Colore della "X"
    line(x - 10, y - 10, x + 10, y + 10);  // Disegna la prima diagonale
    line(x - 10, y + 10, x + 10, y - 10);  // Disegna la seconda diagonale
}
