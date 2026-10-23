import { flower } from "./flower.js";
class rose extends flower
{
        constructor(colour,type,smell)
    {
        super(colour,type)
        this.smell=smell
    }
    roseFlowerDetails()
    {
        console.log("Flower is Rose")
        console.log("Colour is "+this.colour)
        console.log("Type is "+this.type)
    }
}
const RoseObject=new rose("Red","Summer flower","Rose")
RoseObject.roseFlowerDetails()
