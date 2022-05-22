const product={
    brand : "Nike",
    logo : "Nike",
    seller: "Amazon"
};

let p1=Object.create(product, {name:{value: "sneaker"},price:{value:"2000"}});
console.log(p1);