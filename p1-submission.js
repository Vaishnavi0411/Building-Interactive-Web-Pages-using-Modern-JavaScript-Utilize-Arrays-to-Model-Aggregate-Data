//Declare and initialize an object called student with the following properties:
// firstName, lastName, age, email, phoneNum, and address.​

//Display the object properties using console.log statements
function displayObjectProperties(){
    let student= {firstName:"Meera", lastName:"Moon", age:30, email:"meera@123", phoneNum:"837283", address:"22, Sharda Nagar"}
    for(data in student){
        console.log(data+ " : " +student[data]);
    }
}
displayObjectProperties();