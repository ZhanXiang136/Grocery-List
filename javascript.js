let groceryList = [];

document.getElementById("addButton").addEventListener("click", addItem(addItem));
document.getElementById("deleteButton").addEventListener("click:", removeItem());

function initialize(){
    add = document.getElementById("add");
    move = document.getElementById("move");
    addItem = add.addItem.addItem;
    moveItem = move.moveItem.moveItem;
    display = document.getElementById("display");
}

function display(){
    display.innerHTML = groceryList;
    
}

function addItem(item){
    if (!checkDup(item)) 
    groceryList.push(item);
    display();
}

function removeItem(item){
    if (!checkDup(item)) {
        groceryList.slice(groceryList.indexOf(item), 1);
    }
}

function moveItem(){

} 

function checkDup(item) {
    if (groceryList.indexOf(item) > -1) {
        return true;
    }
    return false;
}



