
function addElementsToRoot(elements) {
    let rootElement = document.getElementById("root");
    rootElement.appendChild(elements);
}

function headerContainer() {

    let container =  document.createElement("DIV");
    container.classList.add("headerContainer");
    addElementsToRoot(container);

    let header = document.createElement("H1");
    let content = document.createTextNode("Vanilla JS");
    header.appendChild(content);
    container.appendChild(header);

    let uNameContainer = document.createElement("DIV");
    uNameContainer.classList.add("userDetails");

    let uName = document.createElement("SPAN");
    uName.innerHTML = "Arjun";
    uNameContainer.appendChild(uName);
    let avatar = document.createElement("IMG");
    avatar.setAttribute("src","Avatar.svg");
    uNameContainer.appendChild(avatar);
    container.appendChild(uNameContainer);

}
