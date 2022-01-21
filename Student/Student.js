class Student  
  {  
    //Initializing an object  
    constructor(name,age)  
    {  
      this.name=name;  
      this.age=age;  
    }  
    //Declaring method  
    describe()  
    {  
        return this.name+" is = "+this.age+" years old";
    }  
}  
//taking the name and age from the user
var name = window. prompt("Enter your name: ") 
var age = window. prompt("Enter your age: ") 

//passing object to a variable 
var s1=new Student(name,age);  

console.log(s1.describe());