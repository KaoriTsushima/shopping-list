const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const division = document.getElementById("division");

addButton.addEventListener("click", function () {
  const text = userInput.value;

  // Check if the input is not empty
  if (text) {
    const divItem = document.createElement("p");
    //  divItem.textContent = text;
    const checkbox_label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const checkbox_id = `checkbox_${text}`;
    checkbox.setAttribute("id", checkbox_id);

    // creating label html element
    divItem.appendChild(checkbox);
    checkbox_label.setAttribute("for", checkbox_id);
    checkbox_label.innerText = text;
    divItem.appendChild(checkbox_label);

    divItem.addEventListener("mouseout", function () {
      divItem.style.backgroundColor = "";
      divItem.style.fontWeight = "";
    });

    division.appendChild(divItem);
    userInput.value = "";
  }
});

removeButton.addEventListener("click", function () {
  const divItems = division.getElementsByTagName("p");

  if (divItems.length > 0) {
    division.removeChild(divItems[divItems.length - 1]);
  }
});

function applyWeekday() {
  const selectedDay = document.getElementById("weekday").value;
}
