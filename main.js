let gridDimensions = 16;
let divContainer;

document.addEventListener("DOMContentLoaded", function () {
    divContainer = document.getElementById("container");
    for (let i = 0; i < gridDimensions; i++) {
        createContainer();
    }
});

function createContainer() {
    const newContainer = document.createElement("div");
    newContainer.classList.add("div-container");
    divContainer.appendChild(newContainer);

    for (let j = 0; j < gridDimensions; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("div-style");
        newContainer.appendChild(newDiv);
    }
}

function gridSize() {
    let size = prompt("Please enter the dimensions of your grid");
    if (size < 101) {
        gridDimensions = size;
        divContainer.innerHTML = ""; 
        for (let i = 0; i < gridDimensions; i++) {
            createContainer();
        }
    } else {
        alert("The dimensions of the grid can't excede 100");
    }
}
