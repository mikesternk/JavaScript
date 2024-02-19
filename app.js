const courseInfo = {};
const assignentGroup = {};
const assignmentInfo = {};
const learnerSubmission = [];

function getCourseInfo(id, name) {
    // checking if the id is a number
    if (typeof id !== "number") {
        return "Student ID must be a number";
    }
    // making sure the ID is a 3 digit code
    else if (id > 1000 || id <= 99) {
        return "ID must be a 3 digit number";
    }

    // checking the name 
    if (typeof name !== "string") {
        return "Please write the student's name";
    }
    
    return [id, name];
}

console.log(getCourseInfo(123,"michael"));
console.log("Hello World");