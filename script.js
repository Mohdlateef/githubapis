
let promiseone=new Promise((function(resolve,srject){
    setTimeout(function(){
        console.log("asynic task complete")
        let a=0
        resolve(a)
        
    },1000);
}))
promiseone.then(function(data){
   console.log(data)
   console.log("abc");
})
async function getalluser(){
   try{ const response=await fetch('https://api.github.com/users');
   const data= await response.json();
   console.log(data);}catch(error)
   {
    console.log(error);
   }
}
getalluser();