
let main=document.querySelector("#main");

async function search(){
    let z=document.querySelector("#movie").value;
    let url=`http://www.omdbapi.com/?t=${z}&apikey=8c8b4d00`


    try {
        let res=await fetch(url);
        let data=await res.json();
        showdata(data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }

    
      
}
function showdata(data){

    if(data.Response=="False"){
        let poster=document.createElement("img");
        poster.src="https://media0.giphy.com/media/kEtm4mSTbxvH7j3uCu/200w.webp?cid=ecf05e47zh8k86efe9ahg0hxr3vzcy7e29olzq7bo955n71m&rid=200w.webp&ct=g";
    

        let image=document.querySelector("#img").append(poster)

        let title=document.createElement("h2");
        title.innerText="Not Found"

        let bt1=document.querySelector("#bt1").append(title)
    }
    else{
        let title=document.createElement("h2");
        title.innerText="Title"+" "+data.Title
       
       let poster=document.createElement("img");
       poster.src=data.Poster;
    
       let reldate=document.createElement("h4");
       reldate.innerText="Release Date"+" "+data.Released
    
       let rate=document.createElement("h4");
       rate.innerText="Rating"+" "+data.imdbRating;
    
      
      
       let image=document.querySelector("#img").append(poster)
       let bt1=document.querySelector("#bt1");
       let bt2=document.querySelector("#bt2").append(reldate,rate)
       if(data.imdbRating>8){   
        let rc=document.createElement("h3");
           rc.innerText="Recommended"
    
           bt1.append(title,rc);
       }
       else{
        bt1.append(title);
       }
    
    }


      
    }
   


