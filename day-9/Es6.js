let api_key="AIzaSyAWKiom4Jbc7cJNh6b5Gij4J3cgX1_Mamo";
let query=document.querySelector("#query").value;
let main=document.querySelector("#main")


// let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&regionCode=IN&key=${api_key}`;
// let url=` https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&q=${query}&regionCode=IN&key=${api_key}`;
// let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&${query}&regionCode=IN&key=${api_key}`


let url =   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${api_key}`
let url2=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${api_key}`;

let youtube=async() =>{
  
    let res= await fetch(url);
    let data=await res.json();
    data=data.items;
    append(data)
    console.log(data)
  

}



let append=(data) =>{
    main.innerHTML=null;
    data.forEach((el)=>{
    
        let box=document.createElement("div");
        box.setAttribute("id","box");

        let iframe=document.createElement("iframe");
        let videoId=el.id;
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.allow="Fullscreen";

        let title=document.createElement("h3");
        let txt=el.snippet.title;
        title.innerText=txt;

        box.append(iframe,title);
        main.append(box);

    })
    
    
}

let front= async() =>{

    let res2=await fetch(url2);
    let data2=await res2.json();
      data2=data2.items;
      append2(data2)
    console.log(data2);
}

let append2=(data2) =>{

    data2.forEach((el)=>{
    
        let box=document.createElement("div");
        box.setAttribute("id","box");

        let iframe=document.createElement("iframe");
        let videoId=el.id;
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.allow = "fullscreen";

        let title=document.createElement("h3");
        let txt=el.snippet.title;
        title.innerText=txt;

        box.append(iframe,title);
        main.append(box);

    })
    
    
}



front();
/* <iframe width="560"
 height="315"
  src="https://www.youtube.com/embed/frVXOYpHOVQ" 
  title="YouTube video player" 
  frameborder="0"
   allow="accelerometer; 
   autoplay;
    clipboard-write;
     encrypted-media;
      gyroscope;
       picture-in-picture" allowfullscreen>

       </iframe> */

