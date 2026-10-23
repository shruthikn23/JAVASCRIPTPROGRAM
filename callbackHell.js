//function displayResult(a,cb)
//{
   // console.log("Display fuction invoked")
   //// cb(a)
//}
//function callBack1(cb2)
//{
   // console.log("Callback1 invoked")
   // cb2()
//}
//function end()
{
    console.log("end function invoked")
//}
//displayResult("hello",(result)=>{ 
   // console.log(result)
   // callBack1(()=>{end()})})

    const displayResult=()=>{
        return new Promise((resolve,reject)=>{
            console.log("Display Function executed")
            resolve()
        })
    }
    const callBack1=()=>{
        return new Promise((resolve,reject)=>{
            let pass=false
            if (pass){
           // console.log("Display Function executed")
            resolve("completed")
            }
            else{
                reject("false")
            }
        })
    }
    const end=()=>{
        return new Promise((resolve,reject)=>{
            console.log("Display Function executed")
            resolve()
        })
    }
    displayResult.then(()=>
        callBack1.then(()=>{
            end.then(()=>{
                console.log("Execution completed")
            })
            })
        )
    ).catch((error)=>{
                console.error("error is" +error)
}