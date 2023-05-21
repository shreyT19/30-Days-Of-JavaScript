const form = document.querySelector('.task-form')
const input = document.querySelector('.add-task-input')
const listOfEls = document.querySelector('#tasks')

const handleForm = (event)=>{
    event.preventDefault();
    const inputValue = input.value;
    console.log(inputValue);

    if(!inputValue){
        alert("Enter task")
    }else{
        const taskEL = document.createElement('div');
    taskEL.classList.add('task');

    const contentEL = document.createElement('div');
    contentEL.classList.add('content');

    // contentEL.innerText = inputValue;
    
    taskEL.appendChild(contentEL);
    
    const contentText = document.createElement('input')
    contentText.classList.add('text')
    
    contentText.type = "text";
    contentText.value = inputValue;
    contentText.setAttribute('readonly','readonly')

    contentEL.appendChild(contentText)
    
    
    
    const actionsEl = document.createElement("div");
    actionsEl.classList.add('actions');
    contentEL.appendChild(actionsEl);


    const editBtn = document.createElement('button');
    editBtn.innerText = "Edit"
    editBtn.classList.add('edit');
    actionsEl.appendChild(editBtn);


    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add('delete');
    actionsEl.appendChild(deleteBtn);

    
    listOfEls.appendChild(taskEL);
    input.value="";
    editBtn.addEventListener('click',()=>{
        
        if(editBtn.innerText.toLocaleLowerCase()=="edit"){
            contentText.removeAttribute('readonly')
            contentText.focus();
            editBtn.innerText="Save"
        }else{
            contentText.setAttribute('readonly','readonly')
            editBtn.innerText="Edit"
        }
    })

    deleteBtn.addEventListener('click',()=>{
        listOfEls.removeChild(taskEL)
    })
    }
    
    
}

form.addEventListener('submit',handleForm)
