const btn = document.querySelector('.btn');
const output = document.querySelector('.output');


function randomNumber(){
    const input1 = Number(document.querySelector('.input1').value);

    const input2 = Number(document.querySelector('.input2').value);
    
    if(input1>=input2){
        alert("Ending Number should be greater than Starting Number")
    }else if(input2-input1<2){
        alert("Kindly Enter numbers having greater differences")
     }else{
        let i = Math.floor(Math.random()*(input2-input1))+input1+1;
    console.log(i)
    output.innerHTML=i;
    }
    
}

btn.addEventListener('click',randomNumber);

