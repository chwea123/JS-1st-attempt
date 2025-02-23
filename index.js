//1. take values from the inputs
// 2. Make calculations
// 3. Display it on our table on clicking the button (addStudent)
// 4. if inputs are empty and we click on add student button we show an error below the input
// 5. if inputs of scores are above 100 or below 0 display an error at the bottom of the input
// 6. Caculate the summary using CCS btn and disply it at the bottom of the table
// 7. Remove btn in actions to remove individual items
// 8. Style the bg based on Grade of student
// 9. When no data in table and we click on CCS btn display "No Student added"



const studentsData = []  //database

//object
const studentData = {
    studentName: "",
    mathScore: 0,
    scienceScore: 0,
    englishScore: 0,
    average: 0,
    total: 0,
    grade: 0


}


document.getElementById("addstudent").addEventListener("click", function () {
    
    //Retrieving data
    const student = document.getElementById("studentname").value
    let mathScore = document.getElementById("math").value
    let scienceScore = document.getElementById("science").value
    let englishScore = document.getElementById("english").value
    
    //Calculating scores
    const total = Number(mathScore) + Number(scienceScore) + Number(englishScore)
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

    //Updating the table
    document.getElementById("Studentlist").insertRow().innerHTML = `
    <td>${student}</td>
                    <td>${mathScore}</td>
                    <td>${englishScore}</td>
                    <td>${scienceScore}</td>
                    <td>${total}</td>
                    <td>${average}</td>
                    <td>${grade}</td>
                    <td><button>Delete</button></td>`

    
    //
    if (student === "") {
        document.getElementById("nameMsg").textContent = "Name cannot be empty!"
        document.getElementById("nameMsg").style.color = "red"
    } else {
        document.getElementById("nameMsg").textContent = ""
        document.getElementById("nameMsg").style.color = "black"
    }

    if (mathScore === "") {
        document.getElementById("numberMsg").textContent = "Math score cannot be empty!"
        document.getElementById("numberMsg").style.color = "red"
    } else {
        document.getElementById("numberMsg").textContent = ""
        document.getElementById("numberMsg").style.color = "black"
    }

    if (scienceScore === "") {
        document.getElementById("scienceMsg").textContent = "Science score cannot be empty!"
        document.getElementById("scienceMsg").style.color = "red"
    } else {
        document.getElementById("scienceMsg").textContent = ""
        document.getElementById("scienceMsg").style.color = "black"
    }
    
    if (englishScore === "") {
        document.getElementById("englishMsg").textContent = "English score cannot be empty!"
        document.getElementById("englishMsg").style.color = "red"
    } else {
        document.getElementById("englishMsg").textContent = ""
        document.getElementById("englishMsg").style.color = "black"
    }


    if (mathScore > 100 || mathScore < 0) {
        document.getElementById("numberMsg").textContent ="Score cannot be above 100 or Below 0!"
        document.getElementById("numberMsg").style.color = "red"
    } else {
        document.getElementById("numberMsg").textContent =""
        document.getElementById("numberMsg").style.color = "black"
    }    
        
    if (scienceScore > 100 || scienceScore < 0) {
        document.getElementById("scienceMsg").textContent ="Score cannot be above 100 or Below 0!"
        document.getElementById("scienceMsg").style.color = "red"
    } else {
        document.getElementById("scienceMsg").textContent =""
        document.getElementById("scienceMsg").style.color = "black"
    }  

    if (englishScore > 100 || englishScore < 0) {
        document.getElementById("englishMsg").textContent ="Score cannot be above 100 or Below 0!"
        document.getElementById("englishMsg").style.color = "red"
    } else {
        document.getElementById("englishMsg").textContent =""
        document.getElementById("englishMsg").style.color = "black"
    }  
})

document.getElementById("calculateStats").addEventListener("click", function () {

})
