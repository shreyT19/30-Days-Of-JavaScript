const btn = document.querySelector('#btn');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');


function showPopup(){
    modal.style.display="block";
}
function hidePopup(){
    
    modalContent.classList.add('slide-up');
    setTimeout(()=>{
        modal.style.display="none";
        modalContent.classList.remove('slide-up');
    },500)

}

btn.addEventListener('click',showPopup);
close.addEventListener('click',hidePopup)

modal.addEventListener('click',hidePopup);