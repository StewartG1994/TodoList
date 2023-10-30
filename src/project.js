
function createProject (projectName) {
    let description = 'Type in your project description here...'
    let todoArray = []

    const createTodo = (todoName, description, dueDate, competed) => {
    return {todoName, description, dueDate,competed}
    }

    const addTodo = (todoName, description, dueDate, competed) =>{
        todoArray.push(createTodo(todoName, description,dueDate,competed))
    }

    const defaultTodo = () =>{
        todoArray.push(createTodo('Default Todo', 'Description', '29/06/2024', false))
    }

    return {projectName, description, todoArray, addTodo, defaultTodo}
}
export {createProject};