let container = document.getElementById("container"); 
let button = document.getElementById("button"); 

container.style.display = 'inline-grid'; 
container.style.gridRowGap = '0';
container.style.gridColumnGap = '0'; 


function createGrid(numberOf) {
    container.style.gridTemplateColumns = `repeat(${numberOf}, 1fr)`; 
container.style.gridTemplateRows = `repeat(${numberOf}, 1fr)`;
    for (let i=0; i<numberOf ** 2; i++) {
    let div = document.createElement('div'); 
    div.classList.add("grid");
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "blue"; 
    }); 
    container.appendChild(div);
    }  
};


createGrid(64); 