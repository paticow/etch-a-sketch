document.addEventListener("DOMContentLoaded", function () {

function createContainer() { 
    const newContainer = document.createElement("div");
    newContainer.classList.add('div-container'); 
    document.body.appendChild(newContainer); 

    for (let j = 0; j < 16; j++) { 
        const newDiv = document.createElement("div"); 
        newDiv.classList.add('div-style'); 
        newContainer.appendChild(newDiv); 
    } 
}


for (let i = 0; i < 16; i++) {
    createContainer(); 
}

});
