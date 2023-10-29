import { listItemAddInputComponent, createListItem, buttonDisable ,buttonEnabled , domProjectView} from "./projectDom"
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
    projectArray.push(createProject(projectTitle.value))
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
    console.log(projectListItem)
    projectListItem.forEach(item => item.addEventListener('click', (e) => (domProjectView(projectArray[e.target.getAttribute('index')].projectName))))


}

function eventListenersList () {
listItemAdd()
}

export {eventListenersList}