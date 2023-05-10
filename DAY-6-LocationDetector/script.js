const btn = document.querySelector(".btn");

const dist = document.querySelector('.locality');
const state = document.querySelector('.state');
const country = document.querySelector('.country');
const fetching = document.querySelector('.fetching');

const output = document.querySelector('.output');

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(showPosition);
    fetching.innerHTML="Fetching Your Current Location..."
    setTimeout(()=>{
        fetching.innerHTML="";
    },3750)
};
const showPosition = (position) => {
    const longitudeCord = position.coords.longitude;
    const latitudeCord = position.coords.latitude;
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitudeCord}&longitude=${longitudeCord}&localityLanguage=en`;

//   long.innerHTML = `Longitude : ${position.coords.longitude}`;
//   lat.innerHTML = `Latitude : ${position.coords.latitude}`;
    
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        
        dist.innerHTML = `${data.locality}`
        state.innerHTML = `${data.principalSubdivision}(${data.principalSubdivisionCode
        })`
        country.innerHTML = `${data.countryName}`
        console.log(data.continent);
    })
    .catch(error=>{
        output.innerHTML=`There's error fetching your Location ${error}`
    })
    

 
  console.log(longitudeCord + " "+ latitudeCord);
};

btn.addEventListener("click", getLocation);

