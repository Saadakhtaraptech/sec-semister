//  TOP LEVEL AWAIT 
// let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await response.json();
//     console.log(result);


    // ASYNC AWAIT

// async function getData(){
//     let response = await fetch(`assign.json`)
//     let result = await response.json()
//     console.log(result);

//     let tableBody = document.getElementById("tableBody")
//     tableBody.innerHTML = "";

//     result.forEach(students =>{
//         tableBody.innerHTML +=`
        
//         <tr>
//         <td>${students.id}</td>
//         <td>${students.name}</td>
//         <td>${students.fatherName}</td>
//         <td>${students.age}</td>
//         <td>${students.course}</td>
//         <td>${students.batch}</td>
//         <td>${students.feesPaid}</td>
        
        
//         </tr>

        
        
        
//         `
//     })


// }

// getData()

















fetch("assign.json")
  .then(response => response.json())
  .then(result => {
    const tableBody = document.getElementById("tb");
    tableBody.innerHTML = "";

    result.forEach(student => {
      tableBody.innerHTML += `
        <tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
        </tr>
      `;
    });
  });
