const groceryList = ["a", "b", "c", "d", "e", "f", "g"];
let addOrDeleteForm = document.getElementById("addOrDeleteForm");
let addOrDelete = document.getElementById("addOrDeleteItemInput");
let move = document.getElementById("moveItem");
let displayList = document.getElementById("display");

let itemIdx = null;
let itemEle = null;

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("deleteButton").addEventListener("click", removeItem);
document.getElementById("moveUpButton").addEventListener("click", moveItemUp);
document.getElementById("moveDownButton").addEventListener("click", moveItemDown);

const findIdx = ele => {return groceryList.indexOf(ele);}
const swapElement = (idx1, idx2) => {groceryList[idx1] = groceryList.splice(idx2, 1, groceryList[idx1])[0];}

display();

function display() {
	displayList.innerHTML = "0: " + groceryList[0];
	for (let i = 1; i < groceryList.length; i++) {
		displayList.innerHTML += "<br />" + i + ": " + groceryList[i];
	}
}

function addItem() {
	let item = addOrDelete.value;
	if (groceryList.indexOf(item) === -1) {
		groceryList.push(item);
		itemIdx = null;
		itemEle = null;
	}
	display();
	addOrDeleteForm.reset();
}

function removeItem() {
	let item = addOrDelete.value;
	if (groceryList.indexOf(item) > -1) {
		groceryList.splice(groceryList.indexOf(item), 1);
		itemIdx = null;
		itemEle = null;
	}
	display();
	addOrDeleteForm.reset();
}

function moveItemUp() {
	let index = parseInt(move.value);

	if (itemIdx === null || itemIdx != index) {
		itemIdx = index;
		itemEle = groceryList[index];
	}

	let currentIdx = findIdx(itemEle);

	if (currentIdx === 0) {
		alert("Can't move up anymore");
		return;
	}

	swapElement(currentIdx, currentIdx - 1);
	display();
}

function moveItemDown() {
	let index = parseInt(move.value);

	if (itemIdx === null || itemIdx != index) {
		itemIdx = index;
		itemEle = groceryList[index];
	}

	let currentIdx = findIdx(itemEle);

	if (currentIdx === groceryList.length - 1) {
		alert("Can't move down anymore");
		return;
	}
	swapElement(currentIdx, currentIdx + 1);
	display();
}