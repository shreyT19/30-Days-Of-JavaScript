
//Mouse click slider part

const slider =  document.querySelector('.carousel');

let dragStatus = false;
let prevScrollPosition,prevPageX;

const handleDragStart = (event)=>{
    
    dragStatus = true;
    // we are saving prev positions so that we remember our last mouse event location
    prevPageX=event.pageX;
    prevScrollPosition=slider.scrollLeft;
    // if we don't handle then every time it will start from point 0 
}

const handleDragStop = ()=>{
    dragStatus = false
    slider.classList.remove('dragging')
}


const handleDrag = (event) =>{
    if(!dragStatus)return;
    event.preventDefault();
    slider.classList.add('dragging')
    let positionDifference = event.pageX - prevPageX;
    slider.scrollLeft = prevScrollPosition - positionDifference;

}


slider.addEventListener("mousemove",handleDrag)
slider.addEventListener('mousedown',handleDragStart)
slider.addEventListener('mouseup',handleDragStop)



// buttons part

const buttons = document.querySelectorAll('.wrapper span')

const firstImg = slider.querySelectorAll('img')[0];
let firstImgWidth = firstImg.clientWidth + 14; //14 - FOR MARGIN LEFT VALUE


buttons.forEach((singleBtn)=>{
    singleBtn.addEventListener("click",()=>{
        console.log(singleBtn);
        if(singleBtn.id === "left"){
            slider.scrollLeft-=firstImgWidth;
        }else{
            slider.scrollLeft+=firstImgWidth;
        }
    })
})