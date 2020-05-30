let log = console.log;

let form = document.getElementById("ourForm");
let field = document.getElementById("ourField");
let list = document.getElementById("list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(field.value ) {
    createItem(field.value) 
    } else {
        alert("enter Todo")
    }
});

function createItem(x) {
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`;
    list.insertAdjacentHTML("beforeend", ourHTML);
    field.value = "";
    field.focus();
}

function deleteItem(element) {
    element.parentElement.remove();
}


