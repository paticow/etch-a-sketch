//const divContainer = document.getElementById("container");

function createDiv(){
            const newDiv = document.createElement("div");
            newDiv.classList.add('div-style');
            document.body.appendChild(newDiv);      
}

for (let i = 0; i <= 16; i++) {
    for (let j = 0; j <= 16; j++) {
        //console.log(`hola ${i}`);
        createDiv();        
    }
}
