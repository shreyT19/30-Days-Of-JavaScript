// const add= document.querySelector('.add')
// const reset= document.querySelector('.reset')
// const subtract= document.querySelector('.subtract')

// const output= document.querySelector('.output')


 
// add.addEventListener("click",()=>{
//     output.innerHTML++;
// })

// subtract.addEventListener("click",()=>{
//     output.innerHTML--;
// })

// reset.addEventListener("click",()=>{
//     output.innerHTML=0;
// })


const output= document.querySelector('.output');
const buttons = document.querySelector('.buttons');

//Event Delegation - Targeting the children classes from it's parent class

buttons.addEventListener('click',(event)=>{
    if(event.target.classList.contains('add')){
        output.innerHTML++;
        setColor();
    }else if(event.target.classList.contains('subtract')){
        output.innerHTML--;
        setColor();
    }else{
        output.innerHTML=0;
        setColor();
    }
})

const setColor =()=>{
    if(output.innerHTML>0){
        output.style.color="green";
    }else if(output.innerHTML<0){
        output.style.color="orangered"
    }else {
        output.style.color="black"
    }
}

