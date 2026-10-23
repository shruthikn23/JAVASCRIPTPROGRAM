import { car } from "./Car.js"
class Honda extends car
{
    constructor(color,model,price)
    {
       super(price,model) 
       this.color=color
    }
    hondaDetails()
    {
        console.log("Model: "+this.model + " color : "+this.color +" Price: " +this.price)
    }
}
const Obj=new Honda("Red","Civic",10000)
Obj.carDetails()
Obj.hondaDetails()
const carObj=new car(1000,"ABC")
carObj.carDetails()


