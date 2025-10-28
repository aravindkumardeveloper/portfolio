const laptop={
    isElectronic: true,
    details(){console.log(`my name is ${this.name}. My color is ${this.color}`)}
        
    
};

const laptop1 =Object.create(laptop)
laptop1.name="Dell";
laptop1.color="Black";
laptop1.details();

const laptop2 = Object.create(laptop)
laptop2.name="Hp";
laptop2.color="Silver";
laptop2.model="2025";
console.log(`my properties are:`);
console.log(laptop2);
console.log(`Here in above object model is added by object name with . and respective key name`);

const laptop3 =Object.create(laptop)
laptop3.name ="Lenovo";
laptop3.color="Black";
laptop3.model ="ThinkPad";

console.log(`Before remove option implementation object properties:`);
console.log(laptop3);
delete laptop3.model;
console.log(`After implementing remove option for an object. The object properties are:`);
console.log(laptop3);

const laptop4 = Object.create(laptop)
laptop4.name="TUF";
laptop4.color="Black";
laptop4.material="Metal";
laptop4.model="Brand New Model";

console.log('New laptop properties accessing by keys');
for(i in laptop4){
    console.log(laptop4[i]);
}

console.log('The below statement values are implemented by using this keyword in javascript');

laptop4.details();

const {name,color} =laptop2;
console.log('By using destructure where we reduce the proeperties of an object get what we want from the object');
console.log('Converting the keys in object into varaiables');
console.log(name);
console.log(color);

const buyer ={name:"Ramesh"};
const seller = {laptop:"Dell",Amount:25000};
const twoobjects={buyer,seller};
console.log(twoobjects);
