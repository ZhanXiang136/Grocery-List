let groceryList = [];
let addorDeleteform = document.getElementById("addDelete");
let addorDelete = document.getElementById("addorDeleteItemInput");
let move = document.getElementById("moveItem")
let displayList = document.getElementById("display");
// let count = 1;

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("deleteButton").addEventListener("click", removeItem);
document.getElementById("moveUpButton").addEventListener("click", moveItemUp);
// document.getElementById("moveUpButton").addEventListener("change", counter(true));

function display(){
    displayList.innerHTML = "0: " + groceryList[0];
    for (let i = 1; i < groceryList.length; i++) {
        displayList.innerHTML += "<br />" + i + ": " + groceryList[i];
    }
}

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
    let index = move.value;
    let temp = groceryList.pop(groceryList[index])
    groceryList.splice(index, 0, temp);
    count++;
    display();

    // let index = move.value;
    // let temp = groceryList.pop(groceryList[index - count])
    // groceryList.splice(index - count, 0, temp);
    // count++;
    // display();
}

function moveItemDown(){

}

// function counter(truthValue){
//     if (truthValue){
//         count= 1;
//     }
// }

