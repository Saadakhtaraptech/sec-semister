let status = document.getElementById("status")
let result = document.getElementById("result")

status.innerText = "order is pending......"
let orderFood = new Promise((resolve, reject)=>{

    let food = false;
    setTimeout(function(){
        if(food){
            resolve('Food is ready')
        }else{
            reject('food is not ready')
            
        }
    },3000)
})
orderFood.then((msg)=>{
    status.innerText = msg
    result.innerText = 'enjoy your meal'
}).catch((error)=>{
    status.innerText = error
    result.innerText = 'please enjoy yourself'
})