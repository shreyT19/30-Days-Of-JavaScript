const statusInternet = document.querySelector('.status');
const statusInternetP = document.querySelector('.statusp');

const checkInternet =() =>{

    const text1 = "Your Connected to The Internet !! ";
    const text2 = "Oops!! Kindly Check Your Internet Connection !! ";

    const bool = navigator.onLine ? true : false;
    
    statusInternet.style.color = bool ? "green" :"red";
    statusInternetP.style.color = bool ? "" :"coral";
    statusInternet.innerHTML = bool ? "Online" : "Offline"
    statusInternetP.innerHTML = bool ? `${text1}` : `${text2}`
    // navigator.onLine ? statusInternet.innerHTML="Online" : statusInternet.innerHTML="Offline"
}

setInterval(()=>{
    checkInternet();
},400)

window.addEventListener('load',checkInternet);