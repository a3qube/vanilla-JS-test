
function addElementsToRoot(elements) {
    let rootElement = document.getElementById("headerContainer");
    rootElement.appendChild(elements);
}

function loadContents() {

    let container =  document.createElement("DIV");
    container.classList.add("headerContainer");
    addElementsToRoot(container);

    let header = document.createElement("H3");
    let leftDiv = document.createTextNode("");
    header.appendChild(leftDiv);
    container.appendChild(header);

     header = document.createElement("H1");
    let content = document.createTextNode("Arjun");
    header.appendChild(content);
    container.appendChild(header);

    let uNameContainer = document.createElement("DIV");
    uNameContainer.classList.add("userDetails");

    let uName = document.createElement("SPAN");
    uName.innerHTML = "";
    uNameContainer.appendChild(uName);
    let avatar = document.createElement("IMG");
    // avatar.setAttribute("src","Avatar.svg");
    uNameContainer.appendChild(avatar);
    container.appendChild(uNameContainer);

    createExperienceTimeLine();
}

function handleTransform(event) {

    let element = document.querySelector("#trans");
    element.classList.toggle('transformedDiv');
    element.classList.toggle('rotateDiv');
}

function createTextDivAndAppend(text, parent, className, iconClass){
    let div = document.createElement("DIV");
    className.split(" ").map(cls => div.classList.add(cls));
    let textNode = document.createTextNode(text);
    div.appendChild(textNode);
    if(iconClass){
        let icon = document.createElement("I");
        iconClass.split(" ").map(cls => icon.classList.add(cls));
        div.appendChild(icon);
    }
    parent.appendChild(div);
}

function createExperienceTimeLine(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const expList = document.createElement("UL");
        expList.classList = "experienceList";

        for(exp of data.experience){
            let expLi= document.createElement("LI");

            let expHeader = document.createElement("DIV");
            expHeader.classList.add("experienceHeaderDiv");
            createTextDivAndAppend(exp.role, expHeader, "expHeaderStyle");
            createTextDivAndAppend(exp.client, expHeader, "experienceDate", "fas fa-plane");
            // createTextDivAndAppend("", expHeader, "fas fa-plane");
            createTextDivAndAppend(`${exp.from} - ${exp.to}`, expHeader, "experienceDate");
            // createTextDivAndAppend(exp.to, expHeader);
            expLi.appendChild(expHeader);

            let dutiesLi = document.createElement("ul");
            dutiesLi.classList.add("dutiesList");
            for(res of exp.responsibilities){
                let resContainer = document.createElement("li");
                resContainer.innerHTML = res;
                dutiesLi.appendChild(resContainer);
            }
            expLi.appendChild(dutiesLi);


            expList.appendChild(expLi);
            // expList.appendChild(dutiesLi);
        }
        document.getElementById("root").appendChild(expList);
    })
}