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

    if (competed) {competedText.textContent = 'Completed'}
    else{    competedText.textContent = 'Not Finshed'  }

    const viewButton = document.createElement('button')
    viewButton.classList.add('viewBtn')
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteBtn')

    viewButton.textContent = 'View / Edit'
    deleteButton.textContent = 'Delete'

    taskDiv.append(todoNameText,descriptionText, dueDateText, competedText, viewButton, deleteButton)
    appendTo.append(taskDiv)
}

function domProjectView (projectTitle,setAttribute) {
    console.log(setAttribute)
    const contentArea = document.querySelector('.card')
    const addTaskBtn = document.createElement('button')
    addTaskBtn.classList.add('addTaskBtn')
    addTaskBtn.textContent = 'Add Task'


    contentArea.setAttribute('index', setAttribute)
    contentArea.innerHTML = '';    
    const header = document.createElement('h3')
    header.textContent = projectTitle
    contentArea.append(header, addTaskBtn)
}

function addTaskInput (){}

export {listItemAddInputComponent, createListItem, buttonDisable, buttonEnabled, domProjectView, taskComponemt}