import { listItemAddInputComponent, createListItem } from "./projectDom"

function listItemAdd(){
    const eventNode = document.getElementById('addProject')
    const projectList = document.querySelector('.projectList')
    eventNode.addEventListener('click', (event) =>{listItemAddInputComponent(projectList)
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
    createListItem(projectTitle.value)
    projectAddDivParent.removeChild(projectAddDiv)
    })
closeBtn()
}

function closeBtn () {
     const closeBtn = document.querySelector('.closeBtn')
     const projectAddDiv = document.querySelector('.projectAddDiv')
     const projectAddDivParent = document.querySelector('.menu');
     closeBtn.addEventListener('click', () =>{projectAddDivParent.removeChild(projectAddDiv)})
}

function eventListenersList () {
listItemAdd()
}

export {eventListenersList}