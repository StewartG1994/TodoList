function addTaskInput (data){
    const taskButton = document.querySelector('.addTaskBtn')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.taskDiv')
    console.log(contentArea)



    taskButton.addEventListener('click', () => {
        console.log('taskButton')
        addTaskComponent(contentArea ,taskDiv)
        console.log(data)
    })
}

function addTaskComponent(appendTo, beforeDiv){

    const createTaskDiv = document.createElement('div')

    const todoDiv = document.createElement('div')
    const todoNameText = document.createElement('input')
    const todoLabel = document.createElement('label')
    todoLabel.innerHTML = 'Task Name';
    todoDiv.classList.add('formView')
    todoDiv.append(todoLabel,todoNameText)


    const descriptionDiv = document.createElement('div')
    const descriptionText = document.createElement('input')
    const descriptionLabelOne = document.createElement('label')
    descriptionLabelOne.innerHTML = 'Project Description';
    descriptionDiv.classList.add('formView')
    descriptionDiv.append(descriptionLabelOne,descriptionText)

    const dueDateDiv = document.createElement('div')
    const dueDateText = document.createElement('input')
    dueDateText.placeholder = 'dd/mm/yy'
    const dueDateLabel = document.createElement('label')
    dueDateLabel.innerHTML = 'Due Date'
    dueDateDiv.classList.add('formView')
    dueDateDiv.append(dueDateLabel,dueDateText)


    const competedDiv = document.createElement('div')
    const competedText = document.createElement('input')
    const competedLabel = document.createElement('label')
    competedLabel.innerHTML = 'Completed?'
    competedDiv.classList.add('formView')
    competedDiv.append(competedLabel,competedText)



    const addButton = document.createElement('button')
    addButton.classList.add('addTaskButtonId')
    addButton.textContent = '+'

    createTaskDiv.classList.add('createTaskDiv')

    createTaskDiv.append(todoDiv,descriptionDiv,dueDateDiv, addButton)
    appendTo.insertBefore(createTaskDiv, beforeDiv) 
    
}


export {addTaskInput}

