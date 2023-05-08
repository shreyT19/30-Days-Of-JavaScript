const input = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


//First Method

const checkPalindrome = ()=>{

    const word = document.querySelector('.input-text').value.toLowerCase();
    let low =0;
    let high =word.length-1;
    
    while(low<=high){
        if(word[low]=== word[high]){
            low++;
            high--;
            
        }else{
            
            result.innerHTML=`${word.toUpperCase()} is not a palindrome`
            return;
        }
    }
    result.innerHTML=`${word.toUpperCase()} is a palindrome`;
    return;

}

btn.addEventListener('click',checkPalindrome);

//2nd Method

const palindromeCheck = ()=>{
    
    const word = document.querySelector('.input').value;
    const len = word.length;
    
    let start = word.substring(0,Math.floor(len/2)).toLowerCase();
    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

    // let flipEnd = end.split("").reverse().join("");
    let flipEnd = [...end].reverse().join("");
  
    if(start===flipEnd){
        output.innerHTML=`${word} is a palindrome`
    }else{
        output.innerHTML=`${word} is not a palindrome`
    }
    
}
