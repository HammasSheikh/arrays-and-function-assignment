
// // Assignment 1: Building your friend list
let people = { friends:[]};
let friend1= {
firstname:"Faizan" ,
lastname:"Ali" ,
Id:1
};
let friend2= {
firstname:"Attique" ,
lastname:"Ali" ,
Id:2
};
let friend3= {
firstname:"shahzar" ,
lastname:"Abid" ,
Id:3
};
people.friends.push(friend1 ,friend2, friend3); 
console.log(people);

// Assignment 2: Manipulating an Array: Rearranging words

const scramledArray =["Student" , "of",true , 123 , "am","a", "GIAIC","I"]

scramledArray.splice(2,2) 
scramledArray.pop()
scramledArray.unshift("I") 
scramledArray[1] = "am" ;
scramledArray[2] = "a" ;
scramledArray[3] = "student" ;
scramledArray[4] = "of" ;
scramledArray[5] = "GIAIC" ;

console.log(scramledArray.join(" "));

// Assignment 3: 
type products = {
name:string;
model:number;
cost:number;
quantity:number;
}


const product: products ={
name:"Rado Watch",
model: 2000,
cost: 5000,
quantity: 20,
}
const product1: products={
name:"Puma Cap" ,
model: 1000,
cost: 500,
quantity: 3000,
}

const product2: products={
name:"canon DSLR" ,
model: 250,
cost: 25000,
quantity: 50,

let inventory = {
   product : [product,product1,product2]
   }

console.log("Quantity of the third product:", inventory.product[2].quantity);
let product3: products = {
name:"Casio watch" ,
model:2231,
cost:15000,
quantity:10,
}
inventory.product.push(product3)
console.log("Name of the fourth product:", inventory.product[3].name);
console.log("cost of the first product :",inventory.product[0].cost);

//Assignment 4: 

interface Student {
    name:string;
    senior:boolean;
    completedassignments:boolean;

}
let students: Student[] = [
    {name: "Ahmed" ,
    senior:true ,
     completedassignments:false
    },
      
     {name:"Umer" ,
        senior:false ,
        completedassignments:true
     } ,
     {name:"Ali" ,
        senior:false ,
        completedassignments:false
     } ,
]
console.log(students);