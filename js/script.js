// Consegna 
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora. 

let button_play = document.getElementById("Play");

let button_reset = document.getElementById("Reset");

const gridElement = document.getElementById('grid');

let numero_box = 100;

const crea_griglia = () => {

    var valore_selezionato = document.getElementById('Difficoltà').value;
    
    const node = document.createElement('div');

    if (valore_selezionato == 'Facile') {
        numero_box = 100;
        node.classList.add('box-facile');

    }else if(valore_selezionato == 'Medio'){
        numero_box = 81;
        node.classList.add('box-medio');
        
    }else {
        numero_box = 49;
        node.classList.add('box-difficile');
    }

    return node;
}


button_play.addEventListener('click',

    function() {
        
        for (let i = 1; i<=numero_box; i++) {
        
            const node = crea_griglia();
            node.innerHTML = i;
        
            node.addEventListener('click', function() {
                console.log(this);
                this.classList.add('clicked');
            });
        
            gridElement.appendChild(node);
        
        }
    }
        
    
);

button_reset.addEventListener('click',
    function(){    
        button_reset = window.location.reload();
    }
);