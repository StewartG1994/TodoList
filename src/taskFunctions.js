import { createProject } from "./project"
import { taskComponemt } from "./projectDom"
import { projectArray } from "./eventListeners"

function addTaskInput (data,array){
    const taskButton = document.querySelector('.addTaskBtn')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.taskDiv')


    taskButton.addEventListener('click', () => {

        addTaskComponent(contentArea ,taskDiv)
        pushTask(data,array)

   })
   deleteTask(data.todoArray)


}

function pushTask (data, array){
    const addButton = document.querySelector('.addTaskButtonId')
    const todoInput = document.getElementById('nameId')
    const descriptionInput = document.getElementById('descriptionId')
    const dueDateInput = document.getElementById('dueDateId')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.createTaskDiv')





    addButton.addEventListener('click', () =>{
        data.addTodo(todoInput.value, descriptionInput.value, dueDateInput.value, false)
        let index = data.todoArray.findIndex(item => item.description === descriptionInput.value )
        taskComponemt(todoInput.value, descriptionInput.value, dueDateInput.value, false, contentArea,index)
        contentArea.removeChild(taskDiv)
        deleteTask(data.todoArray)
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
    appendTo.append(createTaskDiv) 
    
}

function deleteTask (array){
    const deleteBtn = document.querySelectorAll('.deleteBtn')
    const contentArea = document.querySelector('.card')
    console.log(projectArray)

    deleteBtn.forEach(element => {
        element.addEventListener('click', (event) => {
        console.log(array)
        let index = event.target.parentElement.getAttribute('index')
        let child = event.target.parentElement
        contentArea.removeChild(child)
        array.splice(index,1)
            console.log(child)
        })
    });
}

function editComponent (append, array,div){
    const createEditDiv = document.createElement('div')
    createEditDiv.classList.add('createEditDiv')
    let editedDiv = div
    editedDiv.innerHTML = ''

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
    addButton.classList.add('editTask')
    addButton.textContent = 'Update'

    createEditDiv.append(todoDiv,descriptionDiv,dueDateDiv, addButton)

    editedDiv.append(createEditDiv)



}

function editTask (array){
    const editBtn = document.querySelectorAll('.viewBtn')
    const contentArea = document.querySelector('.card')


    editBtn.forEach(element => element.addEventListener('click', (event) =>{
        console.log(element)
        
        let index = event.target.parentElement
        let arrayIndex = array[index.getAttribute('index')]
        editComponent(contentArea,array, event.target.parentElement)
    }))
}

export {addTaskInput, deleteTask, editTask}

