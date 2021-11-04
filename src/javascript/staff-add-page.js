function showForm() {
    document.getElementById("staffForm").style.display="block"
}

function hideForm() {
    document.getElementById("staffForm").style.display="none"
}

let staffList = document.querySelector('#staffList')

let staffs = [
    {
        staffID: 1,
        firstName: "Jeff",
        lastName: "Neubauer",
        dob: new Date('1998-11-08'),
        gender: 'male',
        email: 'jeff@email.com'
    },
    {
        staffID: 2,
        firstName: "Lulu",
        lastName: "Schertel",
        dob: new Date('1998-08-11'),
        gender: 'fem',
        email: 'lulu@email.com'
    }
]

let headers = ['Staff ID', 'First Name', 'Last Name', 'DOB', 'Gender', 'Email']

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

staffs.forEach(staff=> {
    let row = document.createElement('tr');
    Object.values(staff).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        }
    )
    table.appendChild(row);
})

staffList.appendChild(table);
