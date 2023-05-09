const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const handleCopy = ()=>{
   
    
    const textEntered = document.querySelector('.input').value;
    console.log(textEntered);
    
    navigator.clipboard.writeText(textEntered);
    
    btn.innerHTML=`<img class = "copy" src = "accepted.png">`;
    setTimeout(()=>{
        btn.innerHTML = `<img class = "copy" src = "copy.png">`
    },3000)
}

btn.addEventListener('click',handleCopy);