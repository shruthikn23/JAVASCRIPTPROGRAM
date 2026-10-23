import { flower } from "./flower.js";
class jasmine extends flower
{
    constructor(colour,type,petals)
    {
        super(colour,type)
        this.petals=petals
    }
    jasmineFlowerDetails()
    {
        console.log("Flower name is Jasmine")
        console.log("Colour is "+this.colour)
        console.log("Jasmine has " +this.petals ,"petals")
    }
}
const jasmineObj=new jasmine("White", "Winter",5)
jasmineObj.jasmineFlowerDetails()