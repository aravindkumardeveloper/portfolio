var example="";
var a=10;
function getvarexample(){
example="I am Var variable. i am definied in next lines but, i am not assign to any data type: "+a;
var a=10;
example +=".<br>Now i am defined my value is: "+a;
document.getElementById("varexample").innerHTML=example;
}

function getletexample(){
example="I am let variable. i am not able to access upcoming variable here. ";
let a=10;
example +="<br>Now i am defined my value is: "+a;
document.getElementById("letexample").innerHTML=example;
}

function getconstexample(){

const pi=3.14;

document.getElementById("constexample").innerHTML="I am constant"+pi;
}

function getstringexample(){
let str="Aravind"
document.getElementById("stringexample").innerHTML="I am using string to print my name. <br>My name is: "+str;
}

function getnumberexample(){
let a=10;
let b=20
document.getElementById("numberexample").innerHTML="Addition of to number is:"+(a+b);
}

function getbooleanexample(){
let a=10;
let b=20;

document.getElementById("booleanexample").innerHTML=(a==b);
}

function getnullexample(){
let a=null;
document.getElementById("nullexample").innerHTML="I don't have a value. My value is: " +a;
}

function getundefinedexample(){
document.getElementById("undefinedexample").innerHTML="I am work for var only. <br>I am accessing the value, but it is undefined due to it is not initialized previously: " +a;
var a=10;
}

function getoperatorsexample(){
    
    var b=20;
    var c=2;
    var add=a+b;
    var sub=a-b;
    var mul=a*b;
    var div=a/b;
    var mod=a%b;
    example= "Addition of two number"+add;
    example += "<br> Subtraction to two number:"+sub;
    example += "<br> Multiplication to two number:"+mul;
    example += "<br> Division to two number:"+div;
    example += "<br> modules to two number:"+mod;    
    example += "<br> adding two number: "+(a+=b);
    example += "<br> multiplying two number: "+(a*=b);
    example += "<br> modules of two number: "+(a%=b);
    example += "<br> power of two number: "+(a**=c);
    example += "<br> greater than to two number: "+(a>b);
    example += "<br> less than to two number: "+(a<b);
    example += "<br> equal to two number: "+(a==b);
    example += "<br>pre increment two number: "+(++b);
    example += "<br> post increment two number: "+(b++);
    example += "<br> pre decrement two number: "+(--b);
    example += "<br> post decrement two number: "+(a--);
    example += "<br> not equal two number: "+(a!=b);
    document.getElementById("operatorsexample").innerHTML=example;
}


function gettemplateexample(){
const str="Korumilli aravind kumar"
example =str;
const para='<br>wfrij eifne finfef iof  dfnref sm fienwf ejfie fke ifr efk  fic  kc if  ce f efeiwoewjrojwro e iecerk i ekowjerjgv nirenkm.'
example +=para;
document.getElementById("templateexample").innerHTML=example;
}

function getalertexample(){
    alert("you did it!");
}

function getpromptexample(){
    let name= prompt("Enter your name");
    alert("Welcome to pratice site:  "+name);
    console.log(name);
}