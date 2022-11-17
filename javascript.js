let groceryList = [];

function initialize(){

}

function addItem(item){
    if (!checkDup(item)) groceryList.push(item);
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




