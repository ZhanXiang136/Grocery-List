const groceryList = [];
let addOrDeleteForm = document.getElementById("addOrDeleteForm");
let addOrDelete = document.getElementById("addOrDeleteItemInput");
let move = document.getElementById("moveItem");
let displayList = document.getElementById("display");
let commonItem = [
	"Apple-Juice",
	"Banana",
	"Bread",
	"Butter",
	"Eggs",
	"Ice-Cream",
	"Milk",
	"Potatoes",
	"Rice",
	"Salmon",
	"Salt",
	"Steak",
];
move.max = groceryList.length - 1;
move.min = 1;

let itemIdx = null;
let itemEle = null;

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("deleteButton").addEventListener("click", removeItem);
document.getElementById("moveUpButton").addEventListener("click", moveItemUp);
document.getElementById("moveDownButton").addEventListener("click", moveItemDown);

commonItem.forEach((item) =>
	document.getElementById(item).addEventListener("click", function () {
		addItemFromImg(item);
	})
);

const findIdx = (ele) => {
	return groceryList.indexOf(ele);
};
const swapElement = (idx1, idx2) => {
	groceryList[idx1] = groceryList.splice(idx2, 1, groceryList[idx1])[0];
};

display();

function display() {
	addOrDeleteForm.reset();
	groceryList.length === 0? displayList.innerHTML = "" : displayList.innerHTML = "1: " + groceryList[0];
	for (let i = 1; i < groceryList.length; i++) {
		displayList.innerHTML += `<br />${i+1}: ${groceryList[i]}`;
	}``
}

function addItem() {
	let item = addOrDelete.value;
	if (groceryList.indexOf(item) === -1) {
		groceryList.push(item);
		itemIdx = null;
		itemEle = null;
	} else {
		alert(`You already have a ${item}`);
	}
	display();
	
}

function removeItem() {
	let item = addOrDelete.value;
	if (groceryList.indexOf(item) > -1) {
		groceryList.splice(groceryList.indexOf(item), 1);
		itemIdx = null;
		itemEle = null;
	}else {
		alert(`${item} does not exist`);
	}
	display();
}

function moveItemUp() {
	let index = parseInt(move.value);
	console.log(index);

	index > groceryList.length - 1 || index < 0 || move.value.length === 0 ? alert("Invalid number") : moveItem("up", index);
}

function moveItemDown() {
	let index = parseInt(move.value);

	index > groceryList.length - 1 || index < 0 || move.value.length === 0 ? alert("Invalid number") : moveItem("down", index);
}

function moveItem(direction, index){
	if (itemIdx === null || itemIdx != index) {
		itemIdx = index;
		itemEle = groceryList[index];
	}

	let currentIdx = findIdx(itemEle);

	if (direction === "down") {
		if(currentIdx === groceryList.length - 1 ){
			alert("Can't move down anymore");
			return;
		}
		else{
			swapElement(currentIdx, currentIdx + 1);
			display();
		}
	
	}
	else{
		if(currentIdx === 0 ){
			alert("Can't move up anymore");
			return;
		}
		else{
			swapElement(currentIdx, currentIdx - 1);
			display();
		}
	}
}

function addItemFromImg(item) {
	if (groceryList.indexOf(item) === -1) {
		groceryList.push(item);
	}
	display();
}
