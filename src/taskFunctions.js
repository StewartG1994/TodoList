function addTaskComponent(appendTo, beforeDiv){


    const content = document.querySelector('.card')
    const createTaskDiv = document.createElement('div')

    const todoDiv = document.createElement('div')
    const todoNameText = document.createElement('input')
    todoNameText.id = 'nameId'
    const todoLabel = document.createElement('label')
    todoLabel.innerHTML = 'Task Name';
    todoDiv.classList.add('formView')
    todoDiv.append(todoLabel,todoNameText)

    const descriptionDiv = document.createElement('div')
    const descriptionText = document.createElement('input')
    descriptionText.id = 'descriptionId'
    const descriptionLabelOne = document.createElement('label')
    descriptionLabelOne.innerHTML = 'Project Description';
    descriptionDiv.classList.add('formView')
    descriptionDiv.append(descriptionLabelOne,descriptionText)

    const dueDateDiv = document.createElement('div')
    const dueDateText = document.createElement('input')
    dueDateText.id = 'dueDateId'
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
    appendTo.append(createTaskDiv)    
}

export {addTaskComponent}