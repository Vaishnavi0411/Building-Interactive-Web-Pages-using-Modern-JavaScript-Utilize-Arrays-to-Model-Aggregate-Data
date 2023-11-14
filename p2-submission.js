
//Calculate the average of array of marks passed as parameter
let marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
function calculateAverage(marks) {
    let sum=0;
    for(let mark of marks){
       sum += mark; 
    }
    return sum/marks.length;
}
let average = calculateAverage(marks);
console.log(`Average : ${average}`)
// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateAverage
}