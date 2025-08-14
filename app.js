const input = document.querySelector("input");
const listContainer = document.querySelector(".list-container");

function addList() {
  if (input.value === "") {
    alert("input text to be added to the list");
  } else {
    const li = document.createElement("li");

    li.innerHTML = input.value.trim();
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  input.value = "";
  savedData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedData();
  }
});

function savedData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayList();
