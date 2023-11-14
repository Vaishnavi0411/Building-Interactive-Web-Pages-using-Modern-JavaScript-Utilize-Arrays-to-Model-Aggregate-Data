
//Sort the marks from an array of marks passed as parameter
let marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
function sortMarks(marks){
    for (let i = 0; i < marks.length; i++) {
        for (let j = 0; j < marks.length - 1 - i; j++) {
            if (marks[j] > marks[j + 1]) {
                let temp = marks[j];
                marks[j] = marks[j + 1];
                marks[j + 1] = temp;
            }
        }
    }
    return marks;
}
let sort = sortMarks(marks);
console.log(`Sorted Marks : ${ sort}`)

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    sortMarks
}
