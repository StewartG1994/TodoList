import { listItemAddInputComponent, createListItem, buttonDisable ,buttonEnabled , domProjectView,  taskComponemt} from "./projectDom"
import { addTaskInput, deleteTask, editTask } from "./taskFunctions"
import { createProject } from "./project"


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
    domProjectView(projectArray[e.target.getAttribute('index')].projectName, projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName))
   
   let projectIndex = (projectArray[projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName)].todoArray)
   console.log(projectIndex)

    let i = 0;

    while (i < projectIndex.length) {
        console.log([i])
        taskComponemt(projectIndex[i].todoName, projectIndex[i].description,projectIndex[i].dueDate, projectIndex[i].competed, contentArea, 0) 
           i++;
}
deleteTask(projectArray[projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName)].todoArray)
addTaskInput(projectArray[projectArray.findIndex(item => item.projectName === projectArray[e.target.getAttribute('index')].projectName)], projectArray)

}))
      
    
}

function eventListenersList () {
listItemAdd()
}

export {eventListenersList, projectArray }