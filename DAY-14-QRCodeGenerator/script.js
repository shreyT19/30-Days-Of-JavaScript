// const apiLink = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='


const inputValue = document.querySelector('.inputV')

const inputSize = document.querySelector('.inputN')
const btn = document.querySelector('.btn');
const QRImage = document.querySelector('.QRImage');
const imgBox = document.querySelector('.img-box');




const handleGenerateQR = ()=>{
    
    const QRValue = inputValue.value;

    const QRSize = (Number)(inputSize.value);
    
    if(QRValue.length==0){
        alert("Kindly enter Text or URL !!")
    }else{
        if(QRSize >=50 && QRSize<=300){
            imgBox.classList.add('show-img')
            QRImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=${QRSize}x${QRSize}&data=${QRValue}`;
            imgBox.style.width = `${QRSize}px`
        }else{
            alert('Kindly Enter value between 50 and 300')
        }
    }
    

    

}

btn.addEventListener('click',handleGenerateQR);


