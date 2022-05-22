function myArray(){

    // this.length=arguments.length;
    Object.defineProperty(this,"length",{
        value:arguments.length,
        writable:true,
        unumerable:false
    })
 
    for(let i=0; i<arguments.length; i++){
        this[i]=arguments[i];
    }
}


let arr = new myArray(1,2,3,4,5,7);

myArray.prototype.push=function(value){
    this[this.length]=value;
    this.length++;
}

myArray.prototype.pop=function(){
    delete this[this.length-1];
    this.length--;
}
myArray.prototype.top=function(){
    console.log(this[this.length-1])
}
myArray.prototype.Sline=function(){
    console.log(Object.values(arr));
}
myArray.prototype.rev=function(){
  let arr2=[];
  for(let j=arr.length-1; j>=0; j--){
      arr2.push(arr[j]);
  }
  console.log(arr2);
}
myArray.prototype.size=function(){
    console.log(this.length);
}

// arr.push(6)
// arr.pop();
// arr.top();
// arr.Sline();
// arr.rev();
// arr.size();
console.log(Object.values(arr));