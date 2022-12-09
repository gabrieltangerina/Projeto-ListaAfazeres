const inputElement=document.querySelector(".new-task-input");
const addTaskButton=document.querySelector(".new-task-button");
const tasksContainer=document.querySelector(".tasks-container")

const validadeInput = () =>{
    return inputElement.value.trim().length > 0

    // if(inputElement.value.trim().length > 0){
    //     return true
    // }else{
    //     return false
    // }

    // trim() -> é para tirar os espaços do input
}

const handleAddTask = () =>{
    const inputIsValid = validadeInput()

    if(!inputIsValid){
        return inputElement.classList.add("error")
    }

    const taskItemContainer=document.createElement("div")
    taskItemContainer.setAttribute("class", "task-item")

    const taskContent = document.createElement("p")
    taskContent.innerText=inputElement.value

    tasksContainer.addEventListener("click", ()=>{
        var container = taskContent
        container.classList.toggle("taskDone")
    })

    const deleteItem=document.createElement("p")
    deleteItem.setAttribute("class", "buttonDelete")
    deleteItem.innerHTML="Deletar"

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)
    tasksContainer.appendChild(taskItemContainer)

    inputElement.value = ""
}

const handleInputChange = () =>{
    const inputIsValid=validadeInput()

    if(inputIsValid){
        return inputElement.classList.remove("error")
    }
}

addTaskButton.addEventListener("click", ()=> handleAddTask())
inputElement.addEventListener("change", () => handleInputChange())
