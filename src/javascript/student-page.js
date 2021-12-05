function showForm() {
    document.getElementById("studentForm").style.display="block"
}

function hideForm() {
    document.getElementById("studentForm").style.display="none"
}

let studentList = document.querySelector('#studentList')

let students;

fetch('https://api.jsonbin.io/b/61acdfce0ddbee6f8b17c64e')
    .then(response => response.json())
    .then(data => students = data)
    .then(json => console.log(json))


let headers = ['Student ID', 'First Name', 'Last Name','Gender','DOB', 'Department', 'Email', "Joining Date"]

function showSelectedListDep() {

    let courseSelection = document.getElementById("courseOptions");
    let selectedCourse = courseSelection.options[courseSelection.selectedIndex].text;
    studentList.innerHTML="";
    switch (selectedCourse) {
        case("Selectcourse"): break;
        case("F1"): showStudentListDep("F1"); break;
        case("F2"): showStudentListDep("F2");break;
        case("F3"): showStudentListDep("F3");break;
        case("F4"): showStudentListDep("F4");break;
    }

}

function showSelectedListSem() {
    let semesterSelection = document.getElementById("semesterOptions");
    let selectedSemester = semesterSelection.options[semesterSelection.selectedIndex].text;
    studentList.innerHTML="";
    switch (selectedSemester) {
        case("Selectsemester"): break;
        case("Winter"): showStudentListSem("Winter"); break;
        case("Sommer"): showStudentListSem("Sommer");break;

    }

}

function showStudentListSem(Semester) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    let studentsfilter;

    if(Semester == "Sommer"){
        studentsfilter = students.filter(stud => parseInt(stud.JoiningDate.split("/")[1]) >= 4 && stud.JoiningDate.split("/")[1] < 10);
    } else {
        studentsfilter = students.filter(stud => parseInt(stud.JoiningDate.split("/")[1]) < 4 || stud.JoiningDate.split("/")[1] >= 10);
    }

    studentsfilter.forEach(student => {
        let row = document.createElement('tr');
        Object.values(student).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            }
        )
        table.appendChild(row);
    })

    studentList.appendChild(table);
}

function showStudentListDep(Department) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    students.filter(student => student.Department === Department).forEach(student => {
        let row = document.createElement('tr');
        Object.values(student).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            }
        )
        table.appendChild(row);
    })

    studentList.appendChild(table);

}

function disableDate() {
    let now = new Date()
    let start = new Date(now)
    start.setDate(now.getDate() - 1)
    document.getElementById("dob").setAttribute("max", start.toISOString().split('T')[0])
}


function checkDate() {
    var selectedDate = document.getElementById("dob").value
    var currDate = new Date()
    var age = parseInt(currDate.getFullYear()) - parseInt(selectedDate.split("-")[0])
    var month = parseInt(currDate.getMonth()) - parseInt(selectedDate.split("-")[1])
    var day = parseInt(currDate.getDay()) - parseInt(selectedDate.split("-")[2])

    if(age < 17 || age > 60){
        alert('Invalid DOB')
    } else if (age == 17) {
        if (month < 0) {
            alert('Invalid DOB')
        } else if (month == 0) {
            if (day < 0) {
                alert('Invalid DOB')
            }
        }
    }else if (age == 60) {
        if (month > 0) {
            alert('Invalid DOB')
        } else if (month == 0) {
            if (day > 0 || day == 0) {
                alert('Invalid DOB')
            }
        }
    }
}

