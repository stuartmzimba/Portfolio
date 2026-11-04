document.addEventListener('DOMContentLoaded', () => {
    const matrixBackground = document.createElement('div');
    matrixBackground.classList.add('matrix-background');
    document.body.prepend(matrixBackground); 

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]|:;"<>,.?/~';
    const numCols = Math.floor(window.innerWidth / 20); 
    const charSize = 16; 
    const fallDurationMin = 5; 
    const fallDurationMax = 15;

   
    const activeChars = [];

    function createMatrixChar(colIndex) {
        const char = document.createElement('span');
        char.classList.add('matrix-char');
        char.innerText = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = `${colIndex * 20}px`; 
        char.style.top = `${Math.random() * -window.innerHeight}px`; 

        const fallDuration = Math.random() * (fallDurationMax - fallDurationMin) + fallDurationMin;
        char.style.animationDuration = `${fallDuration}s`;
        char.style.animationDelay = `${Math.random() * 5}s`;

        matrixBackground.appendChild(char);
        activeChars.push(char);

       
        char.addEventListener('animationend', () => {
            char.remove();
            const index = activeChars.indexOf(char);
            if (index > -1) {
                activeChars.splice(index, 1);
            }
        });
    }

    
    function startColumnRain(colIndex) {
        setInterval(() => {
            createMatrixChar(colIndex);
        }, Math.random() * 2000 + 500);
    }


    for (let i = 0; i < numCols; i++) {
        startColumnRain(i);
    }
});