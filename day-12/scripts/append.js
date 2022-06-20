async function append(url){
    let res= await fetch(url);

    let data=await res.json();
  
    return data;

}

let appenddata=(data,main)=>{

   data.forEach(function(el){
    let box=document.createElement("div");
    box.setAttribute("id","box");

    let img=document.createElement("img");
    img.src=el.image;

    let price=document.createElement("h3");
    price.innerText=el.price;

    let desc=document.createElement('p');
    desc.innerText=el.description


    box.append(img,price,desc);
   main.append(box);

   })
    
}

export {append,appenddata}