// Consegna 
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. 


const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square-facile');
    node.classList.add('numeri');
    return node;
}

for (let i = 1; i<=100; i++) {
    console.log(i)
    

    const node = createGridElement();

    node.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked');
        }
    );
    gridElement.appendChild(node);

}