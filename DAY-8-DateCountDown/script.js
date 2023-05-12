
const end = "11 May 2023";
const body = document.querySelector("body");

const time = setInterval(()=>{
    const endDate = new Date(end);
    const startDate = new Date();
    const totalSeconds = (endDate - startDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds)%60;
    const countDown = document.querySelector(".countdown");
    countDown.textContent = `${format(days)} Days : ${format(hour)} Hours : ${format(minutes)} Min : ${format(seconds)} Sec`;
    
    if(totalSeconds <= 0){
        clearInterval(time);
        countDown.textContent = "Happy New Year"
        body.style.backgroundColor = 'black';
        Display();
    }


},1000);

const format = (t)=>{
    return t < 10 ? `0${t}` : t;
}

const Display = ()=>{
    setInterval(()=>{
        body.style.backgroundColor === 'white' ? body.style.backgroundColor = 'black' : body.style.backgroundColor = 'white';
    },100);
}
