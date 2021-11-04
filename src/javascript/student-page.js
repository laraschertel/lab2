function showForm() {
    document.getElementById("studentForm").style.display="block"
}

function hideForm() {
    document.getElementById("studentForm").style.display="none"
}

let studentList = document.querySelector('#studentList')

let students = [
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
        firstName: "Lara",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        department: 'Fachbereich 2',
        email: 'lulu@email.com'
    }
]

let headers = ['Student ID', 'First Name', 'Last Name', 'DOB', 'Gender', 'Department', 'Email']

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

