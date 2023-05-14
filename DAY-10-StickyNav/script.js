
const nav = document.querySelector('.container')


const checkSticky = ()=>{
    const coords = window.scrollY;
    console.log(coords);
    if(coords>400){
        nav.classList.add('sticky');
        console.log("Added Sticky");
    }else{
        nav.classList.remove('sticky');
        console.log("Removed Sticky");
    }
}


window.addEventListener('scroll',checkSticky)