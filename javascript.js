let groceryList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let addorDeleteform = document.getElementById("addDelete");
let addorDelete = document.getElementById("addorDeleteItemInput");
let move = document.getElementById("moveItem");
let displayList = document.getElementById("display");
let moveIdx = null;

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("deleteButton").addEventListener("click", removeItem);
document.getElementById("moveUpButton").addEventListener("click", moveItemUp);
document.getElementById("moveDownButton").addEventListener("click", moveItemDown);

display();

function display(){
    displayList.innerHTML = "0: " + groceryList[0];
    for (let i = 1; i < groceryList.length; i++) {
        displayList.innerHTML += "<br />" + i + ": " + groceryList[i];
    }
};

function addItem(){
    let item = addorDelete.value;
    if (groceryList.indexOf(item) === -1) {
        groceryList.push(item);
    }
    display();
    addorDeleteform.reset();
}

function removeItem(){
    let item = addorDelete.value;
    if (groceryList.indexOf(item) > -1) {
        groceryList.splice(groceryList.indexOf(item), 1);
    }
    display();
    addorDeleteform.reset();
}

function moveItemUp(){
    let index = parseInt(move.value);

    if (moveIdx === null || moveIdx > index) 
    {
        moveIdx = index;
    }
    if (moveIdx === 0) {
        alert("Can't move up anymore");
        return;
    }

    swapElement(moveIdx, moveIdx-1)
    moveIdx--;
    display();
}

function moveItemDown(){
    let index = parseInt(move.value);

    if (moveIdx === null || moveIdx < index) 
    {
        moveIdx = index;
    }
    if (moveIdx === groceryList.length-1) {
        alert("Can't move down anymore");
        return;
    }

    swapElement(moveIdx, moveIdx+1)
    moveIdx++;
    display();
}

function swapElement(idx1, idx2) {
    console.log(idx1, idx2)
    let temp = groceryList[idx1];
    groceryList[idx1] = groceryList[idx2];
    groceryList[idx2] = temp;
}

