// Problem Description
// HackerLand University has the following grading policy: Every student receives a grade in the inclusive range from 0 to 100.Any grades less than 40 is a failing grade.Sam is a professor at the university and likes to round each student's  according to these rules:If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// ----------------------------------------------------------------

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] >= 38) && ((grades[i] % 5 === 3) || (grades[i] % 5 === 4))) {
            grades[i] = grades[i] + (5 - grades[i] % 5)
        }
    }
    return grades;
}