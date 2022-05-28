const api_key="113022493ff27f2f8c6b098c757f6d0d";
const api_key2="be78e6a29de32db2b2584b3e59605e74"

async function searchdata(){
    let m2b=document.querySelector("#m2b");
    let m2c=document.querySelector("#m2c");
    let m3=document.querySelector("#m3");
    let m4a=document.querySelector("#m4a");
    let m4b=document.querySelector("#m4b");
    let m4c=document.querySelector("#m4c");
    let m4d=document.querySelector("#m4d");

    m2b.innerHTML=null;
    m2c.innerHTML=null;
    m3.innerHTML=null;
    m4a.innerHTML=null;
    m4b.innerHTML=null;
    m4c.innerHTML=null;
    m4d.innerHTML=null;

    let city=document.querySelector("#city").value;

    let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key;

        let res=await fetch(url)

        let Data=await res.json();
        console.log(Data)

 
    let h2=document.querySelector("#h2");
    h2.innerText=Data.name;
   

    let p1=document.createElement("p")
    p1.innerText=Math.floor(Data.main.temp-273)+"C";

    let whea=document.createElement("p")
    whea.innerText=Data.weather[0].description;

    let feel=document.createElement("p")
    feel.innerText="Feels Like"+" "+Math.ceil(Data.main.temp-273)

    let Lt=document.createElement("p")
    Lt.innerText="The Skies will be clear.The low will be"+" "+Math.ceil(Data.main.temp_min-273)

    let pressT=document.createElement("p")
    pressT.innerText="Pressure";

    let press=document.createElement("p")
    press.innerText=Data.main.pressure+" "+"mb";

    let windT=document.createElement("p");
    windT.innerText="Wind_Speed"

    let wind=document.createElement("p");
    wind.innerText=Math.ceil((Data.wind.speed)*1.6)+" "+"km/hr";

    let humiT=document.createElement("p");
    humiT.innerText="Humidity";

    let humi=document.createElement("p");
    humi.innerText=Data.main.humidity+"%";

    let visiT=document.createElement("p");
    visiT.innerText="Visibility"

    let visi=document.createElement("p");
    visi.innerText=(Data.visibility)/1000+" "+"km"



   m2b.append(p1)
   m2c.append(whea,feel)
   m3.append(Lt);
   m4a.append(windT,wind);
   m4b.append(pressT,press)
   m4c.append(humiT,humi)
   m4d.append(visiT,visi);

  
   let iframe=document.querySelector("#gmap_canvas")
   iframe.setAttribute("src",`https://maps.google.com/maps?q=${Data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
  

  
}
function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }
  }
  getLocationWeather()