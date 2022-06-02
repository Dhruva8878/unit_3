
// function Data(n){
//     this.name=n;
//     this.print=function(){
//         console.log(this.name);
//     }
// }

// let s1=new Data("Dhruv");

// console.log(s1);

// class Person{
//     constructor(n){
//         this.name=n;
//         this.print=function(){
//          console.log(this.name);
//         }
//     }
// }

// let p1=new Person("Dhruv");
// console.log(p1);


// class Stack{
//     constructor(){
//         this.length=0;
//         this.stack=[];
//     }

//     push(el){
//         this.stack[this.length]=el
//         this.length++;
//     }
//     pop(){
//         this.length--;
//         this.stack.pop();
//     }
//     peek(){
//         console.log(this.stack[this.length-1]);
//     }
// }

// let s1=new Stack();

// s1.push(5);
// s1.push(7);
// s1.pop();
// s1.peek();
// console.log(s1);

class Mobile{
    constructor(b,bt){
     this.brand=b;
     this.battery=bt;
     this.calling=true;
    }
}

class Smartphone extends Mobile{
    constructor(b,bt,c,sz){
      super(b,bt)
      this.camera=c;
      this.screensize=sz;
    }
}

let p1=new Smartphone("Realme",5000,"50px","6.4inch");

console.log(p1);

