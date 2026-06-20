//console.log("welcome students");
//var a=10
//var b=20
//console.log(a+b)

// let name = "Devayani";
// console.log(name);
// name = "Student";
// console.log(name);


// var a = 10;
// var a = 20;   // Redeclaration 
// console.log(a);



// //table
// let n = 12;

// for(let i = 1; i <= 10; i++) {
//    console.log(n * i);
// }

// const age=12
// if (age>=12){
//     console.log("eligible to vote")
// }
// else{
//     console.log("")
// }


// let a = 10;
// let b = 25;
// let c = 18;

// if (a > b && a > c) {
//     console.log(a + " is greater");
// }
// else if (b > a && b > c) {
//     console.log(b + " is greater");
// }
// else {
//     console.log(c + " is greater");
// }

// const arr =("devayani,anushna,pranthi")
// for(let name of arr){
//     console.log(name)
// }


// //arrow function
// const backend = () 


//callback function
//a function is acting like a parameter to the other functions



//reduce()
// const marks = [25,75,50,30,82,65]
// const total =marks.reduce{
//     (sum,sub)=>sum + sub ,0

// }
// console.log(total)


//sort
// const arr=[10,25,350,50,85]
// arr.sort()

// console.log(arr)
// arr.sort{
//     (a,b) => a-b
    
// )
// console.log(arr)
// arr.sort{
//     (a,b) => b-a
// }
// console.log(arr)



// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];
//display all passed students
//display passed students from cse
//display passed students from csd
//display passed students from csm
//display passed students from it
//display passed students from cso

// const passedStudents = students.filter(student => student.marks >= 35);

// console.log("Passed Students:");
// passedStudents.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Department: ${student.department}, Marks: ${student.marks}`
//   );
// });

// const passedCSE = students.filter(
//   student => student.department === "CSE" && student.marks >= 35
// );

// console.log("Passed CSE Students:");
// passedCSE.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Marks: ${student.marks}`
//   );
// });

// const passedCSD = students.filter(
//   student => student.department === "CSD" && student.marks >= 35
// );

// console.log("Passed CSD Students:");
// passedCSD.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Marks: ${student.marks}`
//   );
// });

//  student => student.department === "CSM" && student.marks >= 35
// ;

// console.log("Passed CSM Students:");
// passedCSM.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Marks: ${student.marks}`
//   );
// });

// const passedIT = students.filter(
//   student => student.department === "IT" && student.marks >= 35
// );

// console.log("Passed IT Students:");
// passedIT.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Marks: ${student.marks}`
//   );
// });

// const passedCSO = students.filter(
//   student => student.department === "CSO" && student.marks >= 35
// );

// console.log("Passed CSO Students:");
// passedCSO.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Marks: ${student.marks}`
//   );
// });


// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];

// //display only the placed students
// const placedStudents = students.filter(student => student.placed === true);

// console.log("Placed Students:");
// placedStudents.forEach(student => {
//   console.log(
//     `Roll No: ${student.rollNo}, Name: ${student.name}, Department: ${student.department}, Package: ${student.package} LPA`
//   );
// });




// const placedStudents = students.filter(student => student.placed === true);

// console.log("Placed Students (Name and Package):");
// placedStudents.forEach(student => {
//   console.log(
//     `Name: ${student.name}, Package: ${student.package} LPA`
//   );
// });



let iscolor=true
function heartcolorchange() {
    const heart=document.getElementById("heart")
    if(is color){
        heart.src="https://tse3.mm.bing.net/th/id/OIP.U2VnP2Y4ZVH6bfllU1vPoQHaHa?pid=Api&P=0&h=180"
        iscolor=false
        p.innerchild="dislike"
        container.appendChild(p)

    }
    else{
        heart.src="https://tse4.mm.bing.net/th/id/OIP.kxtpXAk1vYjpXp1ioyFshQHaGb?pid=Api&P=0&h=180"
        iscolor=true
        p.innerText="like"
    }
}
let p=document.createElement("p")
p.innerText="like"
const container=document.getElementById("container")
container.appendChild(p)