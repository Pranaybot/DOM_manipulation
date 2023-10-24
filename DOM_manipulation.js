document.getElementById("container");
document.querySelector("#container");
document.querySelectorAll(".second");
document.querySelector("ol .third");

let containerElement = document.querySelector("#container");
containerElement.innerText = "Hello";

let footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");

let newLiItem = document.createElement("li");
newLiItem.innerText = "four"

let unorderedlist = document.querySelector("ul");
unorderedlist.appendChild(newLi);

let olLiElements = document.querySelectorAll("ol li");
for(let i = 0; i < olLiElements.length; i++){
    olLiElements[i].style.backgroundColor = "green";
}

footer.remove();
