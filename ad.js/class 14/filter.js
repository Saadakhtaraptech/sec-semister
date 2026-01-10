let array = [29, 44, 2, 10, 4];

let mapData = array.map((currentValue, Index, array)=>{
    return currentValue + 10
})

console.log(mapData)

let data = [20, 21, 19, 18, 12, 22, 25];

let dataFilter = data.filter((value)=>{
    return value >= 21
})

dataFilter.forEach((myData)=>{
    document.write(myData, '<br>')
})

let obj = [
    {
        id : 1,
        name : "farhan",
        email : 'farhan@gmail.com',
        age: 23,
        city : "karachi"
    },
    {
        id : 2,
        name : "aliyan",
        email : 'aliyan@gmail.com',
        age: 24,
        city : "lahore"
    },
    {
        id : 3,
        name : "alina",
        email : 'alina@gmail.com',
        age: 25,
        city : "hyd"
    },

]

let filterCity = obj.filter((currentData)=>{
    return currentData.city === 'karachi'
})

// console.log(filterCity)
filterCity.forEach((value)=>{
    for(let myData1 in value ){
        document.write(
            myData1 , " : ", value[myData1], '<br>'
        )
    }
})