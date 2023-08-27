const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const division = document.getElementById("division");

addButton.addEventListener("click", function () {
  const itemName = userInput.value;
  const day = document.getElementById("weekday").value.toLowerCase();

  if (!itemName) {
    alert("Please enter an item.");
    return;
  }
  console.log(itemName, day);

  const dayElement = document.getElementById(`${day}-items`);
  //   dayElement.appendChild()

  const item_id = `${day}_${itemName}`;
  dayElement.setAttribute("id", item_id);
  // add item-id

  const divItem = document.createElement("p");
  //  divItem.textContent = text;
  const checkbox_label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const checkbox_id = `checkbox_${itemName}`;
  checkbox.setAttribute("id", checkbox_id);

  // creating label html element
  divItem.appendChild(checkbox);
  checkbox_label.setAttribute("for", checkbox_id);
  checkbox_label.innerText = itemName;
  divItem.appendChild(checkbox_label);

  divItem.addEventListener("mouseout", function () {
    divItem.style.backgroundColor = "";
    divItem.style.fontWeight = "";
  });

  dayElement.appendChild(divItem);
  userInput.value = "";
});

removeButton.addEventListener("click", function () {
  const day = document.getElementById("weekday").value.toLowerCase();
  const dayElement = document.getElementById(`${day}-items`);

  const divItems = dayElement.getElementsByTagName("p");

  if (divItems.length > 0) {
    dayElement.removeChild(divItems[divItems.length - 1]);
  }
});

function applyWeekday() {
  const selectedDay = document.getElementById("weekday").value;
}
