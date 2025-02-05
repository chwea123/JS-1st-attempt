//1. take values from the inputs
// 2. Make calculations
// 3. Display it on our table on clicking the button (addStudent)
// 4. if inputs are empty and we click on add student button we show and Alert
// 5. if inputs of scores are above 100 or below 0 display an error at the bottom of the input
// 6. Caculate the summary using CCS btn and disply it at the bottom of the table
// 7. Remove btn in actions to remove individual items
// 8. Style the bg based on Grade of student
// 9. When no data in table and we click on CCS btn display "No Student added"

document.getElementById("addstudent").addEventListener("click", function () {
    const student = document.getElementById("studentname").value
    let mathScore = Number(document.getElementById("math").value)
    let scienceScore = Number(document.getElementById("science").value)
    let englishScore = Number(document.getElementById("english").value)
    
    const total = mathScore + scienceScore + englishScore
    const average = total/3

    let grade = "F"
    if (average >= 90) {
        grade = "A"
    } else if (average >= 80) {
        grade ="B"
    } else if (average >= 70) {
        grade = "C"
    } else if (average >= 60) {
        grade = "D"
    } else {
        grade = "F"
    }

    document.getElementById("Studentlist").insertRow().innerHTML = `
    <td>${student}</td>
                    <td>${mathScore}</td>
                    <td>${englishScore}</td>
                    <td>${scienceScore}</td>
                    <td>${total}</td>
                    <td>${average}</td>
                    <td>${grade}</td>
                    <td><button>Delete</button></td>`

})
