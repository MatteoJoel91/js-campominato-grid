// Consegna 
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. 

let button_play = document.getElementById("Play");
const gridElement = document.getElementById('grid');

button_play.addEventListener('click',    
    function() {

        const createGridElement = () => {
        const node = document.createElement('div');
        node.classList.add('square-facile');
        return node;
    }

    for (let i = 1; i<=100; i++) {
        console.log(i);
        
        const node = createGridElement();
        node.innerHTML = i;

        node.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked');
            }
        );
        gridElement.appendChild(node);

    }
        
    }
);