// function getData(){
//     return new Promise((resolve,reject)=>{
//         console.log("hey buddy")
//        // reject("network error")
//         resolve("Success");
//     })
// }

// let promise=getData();
// promise.then((res)=>{
//     console.log("data",res);
// });

// promise.catch((err)=>
//  console.log(err)
// );

function getData(id){
setTimeout(()=>{
    console.log("hey ",id);
},2000)
}','

async function call(){
    await getData(1);
    await getData(2);

}

