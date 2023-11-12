import { listItemAddInputComponent ,addListItem, buttonDisable,buttonEnabled, displayProjectDom } from "./projectDomFunctions";
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
        displayProjectDom(obj)

    }))

}

function eventListeners (){
    addProjectEventButton()
}

export {eventListeners}