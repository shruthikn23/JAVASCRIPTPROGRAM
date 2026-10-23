class Employee
{
    name:string
    id:number
    constructor(name : string,id:number)
    {
        this.name=name
        this.id=id
    }
    displayEmployee()
    {
        console.log(this.name+ ", " +this.id)
    }
}
const empObj=new Employee("Shruthi",345)
empObj.displayEmployee();