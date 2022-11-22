let groceryList = [];
let add = document.getElementById("addItemInput");
let displayList = document.getElementById("display");

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("deleteButton").addEventListener("click", removeItem);


function display(){
    displayList.innerHTML = "0: " + groceryList[0];
    for (var i = 1; i < groceryList.length; i++) {
        displayList.innerHTML += "<br />" + i + ": " + groceryList[i];
    }
}

function addItem(){
    let item = add.value;
    if (groceryList.indexOf(item) === -1) {
        groceryList.push(item);
    }
    display();
}

function removeItem(){
    let item = add.value;
    if (groceryList.indexOf(item) > -1) {
        groceryList.splice(groceryList.indexOf(item), 1);
    }
    display();
}

