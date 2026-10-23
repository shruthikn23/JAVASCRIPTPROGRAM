class car{
    //let brand="Kia"
    detailsDisplay()
    {
        console.log("Cars method")
        console.log("brand is" + this.brand)
        console.log("price is" + this.price)
    }
    //constructor(){
      //  console.log("Constructor called")

   // }
    constructor(brand,price)
        {
            console.log("constructor is called")
            this.brand=brand
            this.price=price
        }
    
}
const carObj=new car("Honda",5000)
carObj.detailsDisplay()
const carObj1=new car("kia", 1000)
carObj1.detailsDisplay()