let vehicle="car";
let wheels="4";
let brand="Tata"


var specs=new Data(vehicle,wheels,brand,);


function Data(v,w,b){
 this.vehicle=v;
 this.wheels=w;
 this.brand=b;
}

let newspecs=Object.create(specs,{price:{value:"5 Lakh"},Launchdate:{value:"25 May 2022"},
modelname:{value:"Scorpio"}})

console.log(newspecs)