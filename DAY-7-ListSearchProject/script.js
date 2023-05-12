

const ul = document.querySelector('.list');


const input = document.querySelector('.input');


const handleChange = ()=>{
    const inputWord = input.value;
    const list = document.getElementsByTagName('li');

    console.log(inputWord);
    console.log(list);
    for(let i=0;i<list.length;i++){
        if(list[i].innerHTML.toUpperCase().includes(inputWord.toUpperCase())){
            list[i].style.display='';
        }else{
            list[i].style.display="none"
        }
    }
}

input.addEventListener('keyup',handleChange);