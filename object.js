import testData from "./jsonobj.json" with {"type" : "json"}
const testObj=JSON.stringify(testData)
const Obj=JSON.parse(testObj)
console.log(Obj.Id)
const person={
    Fname:"john",
    Lastname:"Dee",
    age:30,
    isemployed : true
}
console.log(person)
console.log(person.Fname)
console.log(person["Fname"])
person.city="Kochi"
console.log(person)
person.Lastname="Konai"
console.log(person.Lastname)
for(const key in person)
{
    console.log(key)
}
for(const key in person)
{
    console.log(key+" : "+person[key])
}
const Student={
    name:"Sree",
    Lastname:"Parvathi",
    Id:123,
    age:30,
    Course:"Automation",
    Subject:["Playwrigt","typescript","javascript"],
    getDetails :function(){
        return `${this.name} is learning ${this.Course}`
    }
}
for(const key in Student)
{
    if(typeof Student[key]=="function")
    {
        console.log(Student[key]())
    }
    else
    {
    console.log(key+" :"+Student[key])
    }
}

