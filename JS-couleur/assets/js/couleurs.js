/***********************************/
/*  Variables et sélecteurs
/**********************************/

// On définit un tableau de couleurs vives et distinctes
let bColors = [
    '#0000CC',
    '#009933',
    '#00CCFF',
    '#33FF00',
    '#990000',
    '#9900CC',
    '#FF0000',
    '#FFFF00',
    '#330066',
    '#000000'
];

// On initialise les curseurs
let redSlider = document.getElementById('red');
let greenSlider = document.getElementById('green');
let blueSlider = document.getElementById('blue');

// On sélectionne tous les boutons
let buttons = document.querySelectorAll('.button');

// On sélectionne le canvas et le contexte
let canvas = document.getElementById('colorCanvas');
let ctx = canvas.getContext('2d');




/***********************************/
/*  Fonctions
/**********************************/

// On crée une fonction pour mettre à jour la couleur du canvas
function updateCanvasColor(r, g, b) {
    let color = `rgb(${r}, ${g}, ${b})`;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}




/***********************************/
/*  Évènements 
/**********************************/

// On ajoute des événements de clic à chaque bouton
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = bColors[i];

    buttons[i].addEventListener('click', function() {
        // On extrait les valeurs RGB de la couleur hexadécimale
        let color = bColors[i];
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);

        // On met à jour les curseurs
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        // On met à jour la couleur du canvas
        updateCanvasColor(r, g, b);
    });
}

// On ajoute des événements pour les curseurs
redSlider.addEventListener('input', function() {
    updateCanvasColor(redSlider.value, greenSlider.value, blueSlider.value);
});

greenSlider.addEventListener('input', function() {
    updateCanvasColor(redSlider.value, greenSlider.value, blueSlider.value);
});

blueSlider.addEventListener('input', function() {
    updateCanvasColor(redSlider.value, greenSlider.value, blueSlider.value);
});
