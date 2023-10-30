import { listItemAddInputComponent, createListItem, buttonDisable ,buttonEnabled , domProjectView, domEditDescription, taskComponemt} from "./projectDom"
import { createProject, addTodo } from "./project"

let projectArray = []

function listItemAdd(){
    const eventNode = document.getElementById('addProject')
    const projectList = document.querySelector('.projectList')
    eventNode.addEventListener('click', (event) =>{
    listItemAddInputComponent(projectList)
    buttonDisable()
    listItemAddToNode()
    })
}

function listItemAddToNode (){
    const addBtn = document.querySelector('.addBtn');
    const projectAddDiv = document.querySelector('.projectAddDiv')
    const projectAddDivParent = document.querySelector('.menu');
    let projectTitle =null

    addBtn.addEventListener('click', () => {
    projectTitle = document.querySelector('.projectInputField')
    let newProject = createProject(projectTitle.value)
    newProject.defaultTodo()
    projectArray.push(newProject)
    console.log(projectArray)
    createListItem(projectTitle.value, projectArray.findIndex(item => item.projectName === projectTitle.value))
    projectAddDivParent.removeChild(projectAddDiv)
    projectView()
    buttonEnabled()
    })

closeBtn()
}

function closeBtn () {
     const closeBtn = document.querySelector('.closeBtn')
     const projectAddDiv = document.querySelector('.projectAddDiv')
     const projectAddDivParent = document.querySelector('.menu');
     closeBtn.addEventListener('click', () =>{projectAddDivParent.removeChild(projectAddDiv)
        buttonEnabled()
    
    })
}

function projectView (){
    let projectListItem = document.querySelectorAll('.projectLi')
    const contentArea = document.querySelector('.card')
    console.log(projectListItem)
    projectListItem.forEach(item => item.addEventListener('click', (e) => {
    domProjectView(projectArray[e.target.getAttribute('index')].projectName, projectArray[e.target.getAttribute('index')].description,  projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName))
   

   let projectIndex = (projectArray[projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName)].todoArray)
   taskComponemt(projectIndex[0].todoName, projectIndex[0].description,projectIndex[0].dueDate, projectIndex[0].competed, contentArea)
}))
      
    
}

function editDescription()
{
    console.log('test')
    const descriptionDiv = document.querySelector('.desDiv')
    descriptionDiv.addEventListener('click', () => {domEditDescription()})



}


function eventListenersList () {
listItemAdd()
}

export {eventListenersList}