import arrow from './assets/images/icons/arrow.png'

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function listItemAddInputComponent (node){
    
    const projectAddDiv = document.createElement('div')
    projectAddDiv.classList.add('projectAddDiv')

    const projectInput = document.createElement('input')
    projectInput.classList.add('projectInputField')
    projectInput.type = 'text';
    projectInput.placeholder = 'Add project'

    const addBtn = document.createElement('button')
    addBtn.textContent = '+ '
    addBtn.classList.add('addBtn')

    const closeBtn = document.createElement('button')
    closeBtn.textContent = 'X'
    closeBtn.classList.add('closeBtn')

    projectAddDiv.append(projectInput,addBtn, closeBtn)
    insertAfter(projectAddDiv, node)
}


function createListItem(projectName, attribute){  
    const listNode = document.querySelector('.projectList')
    let project = document.createElement('li');
    project.setAttribute('index', attribute)
    project.classList.add('projectLi')
    project.textContent = projectName;
    const arrowIcon = new Image ()
    arrowIcon.classList.add('arrowImg')
    arrowIcon.src = arrow
    project.appendChild(arrowIcon)
    listNode.append(project)
}

function buttonDisable () {
    const projectBtn = document.getElementById('projectButton');
    projectBtn.disabled = true;
}

function buttonEnabled () {
    const projectBtn = document.getElementById('projectButton');
    projectBtn.disabled = false;
}

function domProjectView (projectTitle) {
    const contentArea = document.querySelector('.card')
    contentArea.innerHTML = '';    
    const header = document.createElement('h3')
    header.textContent = projectTitle
    contentArea.append(header)

}

export {listItemAddInputComponent, createListItem, buttonDisable, buttonEnabled, domProjectView}