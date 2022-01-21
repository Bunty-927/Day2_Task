class Area{
    
    //initializing the setDem method
    setDem(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    //defining the getArea
    getArea(){
        return "Area is = "+(this.length*this.breadth);
    }
}

//taking the lenbgth and breadth of area by user
var length = window. prompt("Enter your length: ");
var breadth = window. prompt("Enter your breadth: ")

//creating the object of area
var area = new Area();
area.setDem(length,breadth);

//displaying the result of area
console.log(area.getArea());