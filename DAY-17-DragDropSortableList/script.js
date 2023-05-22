const items = document.querySelectorAll('.item');
const sortableList = document.querySelector('.sortable-list');

items.forEach(item=>{
    item.addEventListener("dragstart",()=>{

        setTimeout(()=>{
            item.classList.add("dragging");
        },0)
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging");
    })
})


const handleSortableList = (event)=>{
    event.preventDefault();
    
    const currentDraggingItem = sortableList.querySelector('.dragging');
    console.log(currentDraggingItem);
    //Gets all items except the current dragging element & makes array of them
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

    //finding the sibling after which it needs to be placed
    let nextSibling = siblings.find((singleSibling)=>{
        //check notion
        return event.clientY <= singleSibling.offsetTop + singleSibling.offsetHeight/2;

    })
    //insert before - check copy
    sortableList.insertBefore(currentDraggingItem,nextSibling);
}


sortableList.addEventListener("dragover", handleSortableList);
sortableList.addEventListener("dragenter", (event)=>event.preventDefault());