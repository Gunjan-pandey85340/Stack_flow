// addition = (a,b) => { // arrow function
//     return a+b;
// }
// const value = addition(2,3);
// console.log("value:",value);


// subtraction = (a,b) => { // arrow function
//     return a-b;
// }
// const val = subtraction(2,3);
// console.log("value:",val);



// let value = 10;             // scope of variable
// var a = 1;
// var b = 2;
// addition = (value1,value2 = 10) => {
//     return value1 + value2;
// }
// const variable1 = addition(3,false);
// const variable2 = addition(2,true);                     
// value = addition(2,3);
// console.log("value",variable1);
// console.log("value",variable2);




// let onlySampleText =false;
// addition = (input,onlySampleText) => {
//     message = `i am ${object.name} studying ${object.department} in ${object.aYear}`;
//     if(onlySampleText){
//         message = "Sample text";
//     }
//     return message;
// };
// object = {
//     name:'gunja',
//     department:'cse',
//     aYear:'3rd'
// }
// const variable1 = addition(object);
// console.log(variable1);





// const subtract = (a,b) => {
//     return a-b;
// }
// const multiply =(a,b) =>{
//     return a*b;
// }
// doSomething = (value,callback) => {
//     var data = callback(value['a'],value['b']);
//     return data;
// }
// const variable1 = doSomething({a:1,b:2},subtract);
// const variable2 = doSomething({a:1,b:2},multiply);
// console.log("variable1",variable1);
// console.log("variable2",variable2);
//...............................................................................................................................................................................................//

// let count = 0;
// doSomething = (value = []) => {
//     count +=1;
//     console.log(`total exceeded times ${count}`)
//     if(count==5){
//         return console.log(`maximum limit exceeded ${count}`)
//     }
//     if(value.length ===0){
//         return doSomething([1]);
//     }
//     if(value.length !=2){
//         return doSomething([1]);
//     }
//     return{
//         'actualValue': value,
//         'length': value.length,
//     };
// };
// const variable1 = doSomething([1,2,4,5]);
// console.log("variable1",variable1);


//  let count = 0;
// doSomething = (value = []) => {
//     if(value.length ==2){
//         return doSomething([1]);
//     }
//     return{
//         'actualValue': value,
//         'length': value.length,
//     };
// };
const getData = async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    const variable1 = await response.json();
    console.log("getdata ~data",variable1);
    
};
const variable1 = getData();
console.log("variable1",variable1);




