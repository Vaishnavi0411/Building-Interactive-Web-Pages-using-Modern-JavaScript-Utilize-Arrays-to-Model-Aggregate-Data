
//Find the count of students who have scored marks>=40 from tha array of marks passed as parameter 
let marks =[80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
function findCount(marks){
    let count = 0;
    for(let mark of marks){
        if(mark >= 40){
            count++;
        }
    }
    return count;
}
let countMarks = findCount(marks);
console.log(`Count of students : ${countMarks}`)


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findCount
}