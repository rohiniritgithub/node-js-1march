// var moduleRef = require('./myModuls');
// console.log(moduleRef.sayHello("bitcode"));
// // console.log(moduleRef.sumAll(1, 2 ,3));
// console.log(moduleRef.addition(90,67));
// console.log(moduleRef.addition(90,57,26,45));



       //----------------Factory pattern------------


function createPattern(name, email, tel)
{
    var o = new Object();
    o.name = name;
    o.email = email;
    o.tel = tel;
    o.sayHello = function () 
    {
        return "Hello " + o.name;
    }
    return o;
}

var p1 = createPattern("rohini","rgaikwad@gmail.com",8855941441);
var p2 = createPattern("bitcode","b@gamil.com",8358453454);
console.log(p1.name === p2.name);
console.log(p1.sayHello === p2.sayHello);

console.log(p1.sayHello());

// ----------- Constructor pattern---------------
function Person(name,email,tel)
{
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.sayHello = function()
    {
        return "Hello " + this.name
    }
}

var p1 = new Person("rohini","rgaikwad@gmail.com",8433528978);
var p2 = new Person("bitcode","b@gmail.com",9172362472);
console.log(p1.name === p2.name);
console.log(p1.sayHello === p2.sayHello);


// --------Prototype Pattern-------------



// function Person(){};
// Person.prototype.name = "rohini";
// Person.prototype.email = "rgaikwad@gmail.com";
// Person.prototype.tel = 785649123;
// Person.prototype.friends = ["rohini", "anuja"];
// Person.prototype.sayHello = function()
// {
//     return "Hello " + this.name;
// }
// var p1=new Person();
// p1.name="new name";
// p1.friends.push("Sana");
// console.log
// var p2=createPerson("rohini","rgaikwad@gmail.com",478569235);
// console.log(p1.name===p2.name); 
// console.log(p1.sayHello===p2.sayHello);

//----------------Prototye Pattern--------------
function Person(name,email,tel)
{
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.friends = ["rohini", "anuja"];
}
Person.prototype = 
{
    sayHello: function()
    {
        return "Hello " + this.name;
    }
}
var p1 = new Person("bitcode","b@gmail.com",2374629364);
var p2 = new Person("rohini","rgaikwad@gmail.com",8855941441);
p1.friends.push("sana");
console.log(p1.friends);
console.log(p2.friends);
console.log(p1.friends === p2.friends);
console.log(p1.sayHello === p2.sayHello);