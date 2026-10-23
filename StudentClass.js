class Stu{
    //let brand="Kia"
    StudentMark()
    {
       // console.log("Studentmark")
        console.log("Student is","" + this.studentname)
        console.log("mark is " + this.mark)
        
        

    }
    Average()
    {
        const avg= (this.mark[0]+this.mark[1]+this.mark[2])/3
        console.log("Average is  " +avg)
    }
    constructor(studentname,mark)
        {
            console.log("constructor is called")
            this.studentname=studentname
            this.mark=mark
        }
    }
const studObj=new Stu("Parvathi",[90,98,97])
studObj.StudentMark()
studObj.Average()
const studObj1=new Stu("Shruthi",[100,78,90])
studObj1.StudentMark()



//const studObj1=new Stu("lia", [20,67,78])
//studObj1.StudentMark()

studObj1.Average()