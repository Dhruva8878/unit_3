var form=document.querySelector("#form");
var arr=[];

function Myfun(e){
    e.preventDefault();
   
    let name=form.name.value;
    let category=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let boolean=form.boolean.value;
    
    let product=new Products(name,category,image,price,gender,boolean);
    arr.push(product);

    console.log(arr);
    localStorage.setItem("products",JSON.stringify(arr));
 
}

function Products(n,c,i,p,g,b){
  this.name=n;
  this.category=c;
  this.image=i;
  this.price=p;
  this.gender=g;
  this.boolean=b;
}


