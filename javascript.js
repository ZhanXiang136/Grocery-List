let groceryList = [];

document.getElementById("addButton").addEventListener("click", addItem());
document.getElementById("deleteButton").addEventListener("click:", removeItem());

function initialize(){
    add = document.getElementById("add");
    move = document.getElementById("move");
    addItem = add.addItem.addItem;
    moveItem = move.moveItem.moveItem;
    display = document.getElementById("display");
}

function display(){

}

function addItem(item){
    if (!checkDup(item)) 
    groceryList.push(item);
}

function removeItem(idx){
    groceryList.slice(idx, 1);
}

function moveItem(){

} 

function checkDup(item) {
    if (groceryList.indexOf(item) > -1) {
        return true;
    }
    return false;
}

function display() {

}

