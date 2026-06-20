console.log("Hello World");
console.log("Welcome to Javascript");
console.log("This is my first Javascript code");

// Var , let and Const

var name = "Jeevanantham";


var name = "Rabtoise Technologeis"
    name = "Nithiya"
console.log(name);


let name1 = "Jeeva 1 ";
console.log(name1);

    name1 = "Jeeva 2";

console.log(name1);


const name2 = "jeeva 3";
console.log(name2); 

//  String , Number , Boolen, Undefined, Null, Symbol ,Array, Object

// String Data Type
let str1 = "Hello World double quote";
let str2 = 'Hello World single quote';
let str3 = `Hello World backtick`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log("Str1 dataytpe is ",typeof str1);

str1 = 30;

console.log(str1, str2, str3);
console.log(str1 + " " + str2 + " " + str3);
console.log(`${str1}  ${str2} ${str3}`);


// Number Data Type

let num = 10;


console.log("Num datatype is ",typeof num);



// Boolean Data Type

let bool1 = 1;

console.log("Bool1 datatype is ", typeof bool1);


let def = undefined;
console.log("Def datatype is ", typeof def);

let N = null;
console.log("Null datatype is ", typeof N);

let obj = {
    name: "Nithiya",
    age : 25,
    isMarried : false    
}


console.log("Obj datatype is ", typeof obj);


// Obj variable add key and value
obj.address = "Trichy";

console.log(obj);

// obj varaiable update kay value
obj.age = 18;
console.log(`Object value after update: ${JSON.stringify(obj)}`);

console.log("Object name value is : ", obj.name);
console.log("Object age value is : ", obj.age,obj.isMarried,obj.address);

// obj variable delete key and value
delete obj.isMarried;
delete obj.address;
console.log(`Object value after delete: ${JSON.stringify(obj)}`);


let var_name =  {
       key1: "value1",
       key2: "value2",
       key3: "value3"
}


// Array Data Type

let arr = [10,20,30,40,50,60];
   console.log("Array datatype is ", typeof arr);
   console.log("Array value is ", arr);
   console.log("Array length id ", arr.length);
   console.log("show value of array index 2 is ", arr[5]);

// console.log("Array length is ", arr.length
    arr = ["jeeva","nithiya","gopika"];


// Push , Pop, slice, Splice, indexof , includes, sort, filter, find, map

arr.push("Jeevanantham");
console.log(arr);

arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Jeeva");
console.log(arr);

let arr1 = ["A","B","C","D","E"];
const arr2 = arr1.slice(0,1);
console.log(arr1);
console.log(arr2);


let arr3 = ["A","B","C","D","E"];
arr3.splice(1,3,90);
console.log(arr3);

let findaB = arr3.find((element) => element == 90);
console.log(findaB);


// Function, Arrow Function , immedate invoke function

function firstfun (addvalue){
    console.log("This is my first function");

    const a = 10;
    return a + addvalue;
}

let result = firstfun(20);
console.log(result);


// const functionname = ()=>{

// }

const secondfunction = (c)=>{
      const a = 20 ;
      const b = 30;
      return c + b - a;
}

const result1 = secondfunction(40);
console.log(result1);


(function(){
   console.log("This is my first immediate invoke function");
})()




