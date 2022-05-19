var outputContainer = document.getElementById('container-output')
var counter = 0;
function addNode() {
    newNode = document.createElement('div')
    newNode.classList.add('flex-item')
    newNode.setAttribute('id', counter)
    newNode.innerText = counter
    counter++;
    newNode.innerText = counter
    outputContainer.appendChild(newNode)
}

function onOKClicked(e) {
    addNode();
}