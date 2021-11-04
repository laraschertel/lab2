let studentList = document.querySelector('#studentList')

let informatikStudents = [
    {
        studentID: 1,
        firstName: "Iara",
        lastName: "Neubauer",
        dob: new Date('1998-11-08'),
        gender: 'fem',
        department: 'Fachbereich 4',
        email: 'lala@email.com'
    },
    {
        studentID: 2,
        firstName: "Iuiu",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        department: 'Fachbereich 2',
        email: 'lulu@email.com'
    }
]
let designStudents = [
    {
        studentID: 1,
        firstName: "Dara",
        lastName: "Neubauer",
        dob: new Date('1998-11-08'),
        gender: 'fem',
        department: 'Fachbereich 4',
        email: 'lala@email.com'
    },
    {
        studentID: 2,
        firstName: "Dudud",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        department: 'Fachbereich 2',
        email: 'lulu@email.com'
    }
]
let medicineStudents = [
    {
        studentID: 1,
        firstName: "Mara",
        lastName: "Neubauer",
        dob: new Date('1998-11-08'),
        gender: 'fem',
        department: 'Fachbereich 4',
        email: 'lala@email.com'
    },
    {
        studentID: 2,
        firstName: "Mumu",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        department: 'Fachbereich 2',
        email: 'lulu@email.com'
    }
]
let lawStudents = [
    {
        studentID: 1,
        firstName: "Lara",
        lastName: "Neubauer",
        dob: new Date('1998-11-08'),
        gender: 'fem',
        department: 'Fachbereich 4',
        email: 'lala@email.com'
    },
    {
        studentID: 2,
        firstName: "Lulu",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        department: 'Fachbereich 2',
        email: 'lulu@email.com'
    }
]
let headers = ['Student ID', 'First Name', 'Last Name', 'DOB', 'Gender', 'Department', 'Email']

function showSelectedList() {
    let courseSelection = document.getElementById("courseOptions");
    let selectedCourse = courseSelection.options[courseSelection.selectedIndex].text;
    studentList.innerHTML="";
    switch (selectedCourse) {
        case("Selectcourse"): break;
        case("Informatik"): showStudentList(informatikStudents); break;
        case("Design"): showStudentList(designStudents);break;
        case("Medicine"): showStudentList(medicineStudents);break;
        case("Law"): showStudentList(lawStudents);break;
    }

}

function showStudentList(students) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    students.forEach(student => {
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