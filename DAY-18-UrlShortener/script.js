const input = document.querySelector('.input');
const generateLink = document.querySelector('.btn');

const link1 = document.querySelector('.output1')
const link2 = document.querySelector('.output2');
const copyBtn1 = document.querySelector('.copy1');
const copyBtn2 = document.querySelector('.copy2');

const linksDiv = document.querySelector('.links');
const errorDiv = document.querySelector('.error-msg');

const handleShortenLink = async ()=>{
    const url = input.value;

    const response =await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    
    if(response.ok){
        linksDiv.style.display="block";
        errorDiv.style.display="none";
        link1.innerHTML = data.result.short_link 
        link2.innerHTML = data.result.short_link2 
    }else{
        
        linksDiv.style.display="none";
        errorDiv.style.display="block";
    }
    
    console.log(data);

    console.log(data.result.short_link2);


    input.value="";
    
}

generateLink.addEventListener('click',handleShortenLink);
copyBtn1.addEventListener('click',()=>{
    navigator.clipboard.writeText(link1.innerHTML)
})
copyBtn2.addEventListener('click',()=>{
    navigator.clipboard.writeText(link2.innerHTML)
})