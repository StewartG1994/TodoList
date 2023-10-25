import arrowImage from './assets/images/icons/arrow.png'
import { createProject } from './project';

let projectArray = [];

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function classListAdd(node, className){
    node.classList.add(className)
}

function closeItem (node){
    node.addEventListener('click', (event) => {
        event.target.parentNode.remove()
        document.querySelector('#projectButton').disabled = false;
})

}

function addItem(item, node){
    node.addEventListener('click', event => {
        projectArray.push(createProject(item.value))
        console.log(projectArray)
        createListItem(item.value)
        document.querySelector('#projectButton').disabled = false;
        event.target.parentNode.remove()

    })
}

function addProject (){
    const mainAddProjectButton = document.getElementById('addProject');
    mainAddProjectButton.addEventListener('click', () =>{    addProjectComponent()
    })
}

function addProjectComponent (){

    const listNode = document.querySelector('.projectList')
    document.querySelector('#projectButton').disabled = true;

    const projectAddDiv = document.createElement('div')
    projectAddDiv.classList.add('projectAddDiv')
    const projectInput = document.createElement('input')
    projectInput.type = 'text';
    projectInput.placeholder = 'Add project'

    const addBtn = document.createElement('button')
    addBtn.textContent = '+ '
    classListAdd(addBtn, 'addBtn')
    
    const closeBtn = document.createElement('button')
    closeBtn.textContent = 'X'
    classListAdd(closeBtn, 'closeBtn')

    projectAddDiv.append(projectInput,addBtn, closeBtn)
    insertAfter(projectAddDiv, listNode)
    addItem(projectInput, addBtn)
    closeItem(closeBtn)
    
}

function createListItem(projectName){  
    const listNode = document.querySelector('.projectList')
    let project = document.createElement('li');
    project.classList.add('projectLi')
    project.textContent = projectName;
    const arrowIcon = new Image ()
    arrowIcon.classList.add('arrowImg')
    arrowIcon.src = arrowImage
    project.appendChild(arrowIcon)
    listNode.append(project)
}
export {addProject}