export class car
{
    constructor(price,model)
    {
        this.price=price
        this.model=model
    }
    carDetails()
    {
        console.log("the car model is " +this.model)
        console.log("Car price is " +this.price)
    }
}

