// var name ="Gunjan pandey";
// console.log(name);
// let department = "CS"
// department = "CS section I";
// console.log(department);
// const year = 2024;
// year = 2025;
// console.log(year);
// var value = 4*4;
// console.log(value);
// const students = [ // storing the object with key value pair array of object
//     {"name" : "Gunjan Pandey",
//     "dob" :"02-11-2005",
//     "college": "GLAU" ,
//     },
//     {
//         "name" : "Gunja",
//         "dob" :"20-06-2005",
//         "college": "GLAU" ,
//     }
// ]
//console.log(students);
// let studentname = "studentname";
// var dob = "10-10-2010";
// const college = "glau";
// const student =[ {
//     name:"studentname",
//     dob:"10-10-2005",
//     college:college,
// },
// studentname.name ="satyam",
// console.log(studentname),
// {
//     name:"studentname1",
//     dob:dob,
//     college:college,
    
// },
// ]
// console.log(student);



// const students =[{
//     name:"gunji",
//     collegeName:"glau",
//     dob:"02-11-2005",
//     Eng:12345,
//     //MBBS:6789,
//     currentyear : 2024,
//     order:1
//     // english:{
//     //     totalmarks:81,
//     //     atttendence:91,
//     // }
//     },
//     {
//     studentname:"student name 2",
//     collegeName:"sample college name2",
//     dob:"10-10-2005",
//     currentyear:2024,
//     },
// ];
// students[0].order = students[0].order *5
// students[1].order = students[0].order *5
// console.log(students);
// const output = `this is ${students.name}, and i am studing in ${students.collegeName} and my english mark is ${students.currentyear}`
// console.log(output);

//dobalize ="dob";
// const studentcopy = {...student}
// studentcopy [dob] = "updatedData"
// console.log(student);
// console.log(studentcopy);// hard coded key 
// //const currentacacedmicsyear1 = student?.[college]
// console.log(currentacacedmicsyear1);
// const collegeName ="collegeName"
// const var1 = student ?.["collegeName"];
// const var2 = student ?.["currentyear"];
// const var3 = student ?.[ENG];
// const var4 = student ?.[MBBS];
// const var6 = student ?.[dobalize];

// const output = `this is ${student.name}, and i am studing in ${student.collegeName} and my english mark is ${student.totalmarks}`

//                //this is gunji, and i am studing in glau and my english mark is undefined

// const students =[{
//     name:"gunji",
//     collegeName:"glau",
//     dob:"02-11-2005",
//     Eng:12345,
//     currentyear : 2024,
//     order:1
//     },
//     {
//     studentname:"student name 2",
//     collegeName:"sample college name2",
//     dob:"10-10-2005",
//     currentyear:2024,
//     },
// ];
// students[0].order = students[0].order *5
// students[1].order = students[1].order *5
// console.log(students);
let students = [
    {
        order : 5,
    },
    {
        order : 10,
    },
    {
        order :15,
    },
    {
        order :20,
    },
    {
        order :25,
    }
];
// students = students.map((item) => {
// students.map((item,index)=>{
//     const updatedValue = item.order*5;
//     item.order = updatedValue;
//     return item;
// });
// console.log(students);
// students.map((item)=> {
//    return item-5;
// });
//console.log(students);
students.forEach((item,value) =>{
    students[index] =item - 5;
});
