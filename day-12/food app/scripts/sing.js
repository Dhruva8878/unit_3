let form=document.querySelector("#form");

function signupdata(event){
    event.preventDefault();

    let name=form.name.value;
    let email=form.email.value;

    class Deatails{
        constructor(n,email){
            this.name=n;
            this.email=email;
        }
    }

    let p=new Deatails(name,email);


    let logdata=JSON.parse(localStorage.getItem("userLog"));
console.log(p.name)
    if(logdata.name==p.name && logdata.email==p.email){
        alert("singUp Successfull")
        window.location.href="./index.html"
    }
    else{
        alert("Please fill details correctly");
    }

   
}
