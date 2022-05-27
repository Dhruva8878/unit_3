
// const url="https://reqres.in/api/users";

// fetch(url)
// .then(function(res){
//   return res.json();
// })
// .then(function(res){
//     console.log(res.data);
// })
// .catch(function(err){
//     console.log(err);
// })


// async function data(){
//     try{
//         let users=await fetch(url);
//         let res=await users.json();
//    append(res.data);
    
//         console.log(res.data)
//     }
//     catch(err){
//         console.log(err);
//     }

// }

// data();

// function append(data){
//     let main=document.querySelector("#main");
//     data.forEach(function(el){
//         let box=document.createElement("div")
//         box.setAttribute("id","box")
    
//         let img=document.createElement("img");
//         img.src=el.avatar

//         let h2=document.createElement("h2")
//         h2.innerText=el.first_name

//         let p=document.createElement('p')
//         p.innerText=el.email;

//         box.append(img,h2,p)

//         main.append(box);

//     })
// }


const url="https://fakestoreapi.com/products"

async function data(){
    try{
        let res=await fetch(url) 
        let product=await res.json();
        append(product);
        console.log(product);
    }
    catch(err){
        console.log(err);
    }
}
data();

function append(data){
    let main=document.querySelector("#main");
    data.forEach(function(el){
        let box=document.createElement("div")
        box.setAttribute("id","box")

        let img=document.createElement("img")
        img.src=el.image
    
        let h2=document.createElement("h2")
        h2.innerText=el.title

        let p1=document.createElement("p")
        p1.innerText=el.price;

        let p=document.createElement('p')
        p.innerText=el.description;
        

        box.append(img,h2,p1,p)

        main.append(box);

    })
}