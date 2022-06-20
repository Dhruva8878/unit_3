let form=document.querySelector("#form");

function logindata(event){
    event.preventDefault();

    let name=form.name.value;
    let number=form.num.value;
    let email=form.email.value;

    class Deatails{
        constructor(n,num,ema){
            this.name=n;
            this.number=num;
            this.email=ema;
        }
    }

    let p=new Deatails(name,number,email);


    localStorage.setItem("userLog",JSON.stringify(p));
    console.log(p);

    window.location.reload();
}



