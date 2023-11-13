import { listItemAddInputComponent ,addListItem, buttonDisable,buttonEnabled, displayProjectDom } from "./projectDomFunctions";
import {addTaskComponent, editComponent} from './taskFunctions'

import {createProject} from './project'
let projectArray = []

function addProjectEventButton () {
    const addProjectButton = document.getElementById('addProject');
    const projectList = document.querySelector('.projectList')

    addProjectButton.addEventListener('click', () => {
    buttonDisable()
    listItemAddInputComponent(projectList)
    projectAdd()
    closeBtn()
    
    })
}

function projectAdd (){
    const addBtn = document.querySelector('.addBtn')
    const projectAddDivParent = document.querySelector('.menu');
    const projectAddDiv = document.querySelector('.projectAddDiv')
    const inputValue = document.querySelector('.projectInputField')

    addBtn.addEventListener('click', () =>{
    projectAddDivParent.removeChild(projectAddDiv)
    let obj = createProject(inputValue.value)
    obj.defaultTodo()
    projectArray.push(obj)
    let index = projectArray.findIndex(item => item.projectName === obj.projectName)
    buttonEnabled()
    addListItem(inputValue.value, index)
    displayProject()
})
}

function closeBtn () {
    const closeBtn = document.querySelector('.closeBtn')
    const projectAddDiv = document.querySelector('.projectAddDiv')
    const projectAddDivParent = document.querySelector('.menu');
    closeBtn.addEventListener('click', () =>{projectAddDivParent.removeChild(projectAddDiv)
       buttonEnabled()
   
   })
}

function displayProject(){
    let projectLinks = document.querySelectorAll('.projectLi')

    projectLinks.forEach(item => item.addEventListener('click', (event) =>{
        let obj = projectArray[event.target.getAttribute('index')]
        let objIndex = projectArray.findIndex(item => item.projectName === obj.projectName )
        displayProjectDom(obj, objIndex)
        deleteTaskEventListener()
        addTaskListenser()
        editTaskListener()
    }))
}

function addTaskListenser (){
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.taskDiv')
    const addBtn = document.querySelector('.addTaskBtn')

    addBtn.addEventListener('click', () =>{
        addTaskComponent(contentArea, taskDiv)
        pushTaskListener()
        addTaskListenser()
        editTaskListener()
})
deleteTaskEventListener()

}

function pushTaskListener () {
    const addButton = document.querySelector('.addTaskButtonId')
    const todoInput = document.getElementById('nameId')
    const descriptionInput = document.getElementById('descriptionId')
    const dueDateInput = document.getElementById('dueDateId')
    const contentArea = document.querySelector('.card')
    const taskDiv = document.querySelector('.createTaskDiv')

    addButton.addEventListener('click', () =>{
        let object = projectArray[contentArea.getAttribute('index')]
        object.addTodo(todoInput.value, descriptionInput.value, dueDateInput.value, false)
        let objIndex = projectArray.findIndex(item => item.projectName === object.projectName )
        displayProjectDom(object, objIndex)
        addTaskListenser()
        editTaskListener()
    })
    deleteTaskEventListener()

}

function deleteTaskEventListener(){

    const deleteBtn = document.querySelectorAll('.deleteBtn')
    const contentArea = document.querySelector('.card')

    deleteBtn.forEach(element => {
        element.addEventListener('click', (event) => {
            let object = projectArray[contentArea.getAttribute('index')]
            let objIndex = projectArray.findIndex(item => item.projectName === object.projectName )
            let todoArray = object.todoArray
            let arrayIndex = event.target.parentElement.getAttribute('index')
            todoArray.splice(arrayIndex,1)
            displayProjectDom(object, objIndex)
            addTaskListenser()
            editTaskListener()
        })
    });}

function editTaskListener (){
    const contentArea = document.querySelector('.card')

    const editBtn = document.querySelectorAll('.viewBtn')
    editBtn.forEach(element => element.addEventListener('click', (event) =>{
        let object = projectArray[contentArea.getAttribute('index')]
        let objIndex = projectArray.findIndex(item => item.projectName === object.projectName )
        let todoArray = object.todoArray
        let arrayIndex = event.target.parentElement.getAttribute('index')
        let editTodoItem = todoArray[arrayIndex]
        editComponent(event.target.parentElement, editTodoItem.todoName, editTodoItem.description, editTodoItem.dueDate)
        console.log(object, objIndex)
        pushEditListener(object.todoArray[arrayIndex], object, objIndex)
    }))

}

function pushEditListener (arrayItem, objIndex, object){

    let todoName = document.getElementById('nameId')
    let description = document.getElementById('descriptionId')
    let dueDate = document.getElementById('dueDateId')
    const editBtn = document.querySelector('.editTask')

    editBtn.addEventListener('click', () =>{
        console.log(todoName.value, description.value, dueDate.value)
        arrayItem.todoName = todoName.value
        arrayItem.description = description.value;
        arrayItem.dueDate = dueDate.value
        console.log(object, objIndex) 
        displayProjectDom(objIndex, object)
        deleteTaskEventListener()
        addTaskListenser()
        editTaskListener()
    })

  
}




function eventListeners (){
    addProjectEventButton()
}

export {eventListeners}