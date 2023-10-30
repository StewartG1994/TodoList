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

function taskComponemt(todoName, description, dueDate, competed,appendTo){
    const taskDiv = document.createElement('div')
    const todoNameText = document.createElement('p')
    const descriptionText = document.createElement('p')
    const dueDateText = document.createElement('p')
    const competedText = document.createElement('p')
    taskDiv.classList.add('taskDiv')


    todoNameText.textContent = todoName
    descriptionText.textContent = description
    dueDateText.textContent = dueDate
    competedText.textContent = competed

    taskDiv.append(todoNameText,descriptionText, dueDateText, competedText)
    appendTo.append(taskDiv)
}

function domProjectView (projectTitle, projectDescription,setAttribute) {
    console.log(setAttribute)
    const contentArea = document.querySelector('.card')
    contentArea.setAttribute('index', setAttribute)
    console.log(projectDescription)
    contentArea.innerHTML = '';    
    const header = document.createElement('h3')
    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('desDiv')
    const descriptionHeader = document.createElement('h5')
    descriptionHeader.textContent = 'Project Description'
    const descriptionText = document.createElement('p')
    descriptionText.classList.add('desText')
    descriptionText.textContent = projectDescription
    descriptionDiv.append(descriptionHeader,descriptionText)
    header.textContent = projectTitle
    contentArea.append(header, descriptionDiv)
}



function domEditDescription (){
    const descriptionDiv = document.querySelector('.desDiv')
    descriptionDiv.innerHTML = ''
    descriptionDiv.classList.add('desInputDiv')
    const descriptionInput = document.createElement('input')
    descriptionInput.type = 'text';
    descriptionInput.classList.add('desInput')
    descriptionDiv.append(descriptionInput)

    
}

export {listItemAddInputComponent, createListItem, buttonDisable, buttonEnabled, domProjectView, domEditDescription, taskComponemt}