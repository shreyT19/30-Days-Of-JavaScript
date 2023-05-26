const text = document.querySelector('.sec-text');


const textLoad = ()=>{
    setTimeout(() => {
        text.textContent = "YouTuber"
    }, 0);
    setTimeout(() => {
        text.textContent = "Coder"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Gamer"
    }, 8000);

}
textLoad();
setInterval(textLoad,12000)