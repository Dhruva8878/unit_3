
async function getdata(url){
    let res=await fetch(url);

    let data=await res.json();
     data=data.meals;
     
    return data;
}


function append(data,menu){
    data.forEach(function(el){
        let box=document.createElement("div");
        box.setAttribute("id","box");

        let img=document.createElement("img");
        img.src=el.strMealThumb;


        box.append(img);
        menu.append(box);

    })

}

export {getdata,append}

 

