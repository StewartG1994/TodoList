import { createProject } from "./project"
import { taskComponemt } from "./projectDom"

function addTaskInput (data,array){
    const taskButton = document.querySelector('.addTaskBtn')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.taskDiv')

    taskButton.addEventListener('click', () => {
        addTaskComponent(contentArea ,taskDiv)
        pushTask(data,array)
    })
}

function pushTask (data, array){
    const addButton = document.querySelector('.addTaskButtonId')
    const todoInput = document.getElementById('nameId')
    const descriptionInput = document.getElementById('descriptionId')
    const dueDateInput = document.getElementById('dueDateId')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.createTaskDiv')

    console.log(array)



    addButton.addEventListener('click', () =>{
        data.addTodo(todoInput.value, descriptionInput.value, dueDateInput.value, false)
        let index = data.todoArray.findIndex(item => item.description === descriptionInput.value )
        taskComponemt(todoInput.value, descriptionInput.value, dueDateInput.value, false, contentArea,index)
        contentArea.removeChild(taskDiv)
        console.log(data.todoArray)

    })

}

function addTaskComponent(appendTo, beforeDiv){

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
    appendTo.insertBefore(createTaskDiv, beforeDiv) 
    
}

function deleteTask (){
    const deleteBtn = document.querySelector('.deleteBtn')
    console.log(deleteBtn)


}

export {addTaskInput, deleteTask}

