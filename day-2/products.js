var main=document.createElement("div")
main.setAttribute("id", "main");

var productsArr=JSON.parse(localStorage.getItem("products"))||[];


productsArr.forEach(function(el){
  
    let box=document.createElement("div");
    box.setAttribute("id","box");

    let productn=document.createElement("h2");
    productn.innerText=el.name;

    let category=document.createElement("p");
    category.innerText=el.category;

    let image=document.createElement("img");
    image.setAttribute("src",el.image);

    let price=document.createElement("p");
    price.innerText=el.price;

    let gender=document.createElement("p");
    gender.innerText=el.gender;

    let boolean=document.createElement("p");
    boolean.innerText=el.boolean;

    var btn1=document.createElement("button");
    btn1.innerText="remove"
    btn1.addEventListener("click", function(el){
        delbtn(el)
    })

    var btn2=document.createElement("button");
    btn2.innerText="sold"
    btn2.addEventListener("click", function(){
        soldbtn(el)
    });
  
    box.append(productn,category,image,price,gender,boolean,btn1,btn2);

    main.append(box);



    function soldbtn(el){
        if((el.boolean)=="true"){
            btn2.style.color="green"
        }
        else{
            btn2.style.color="red"
        }
       
    }

    function delbtn(el){
      el.target.parentNode.remove();
      window.location.reload
    }
    

})





document.querySelector("body").append(main);