let adminTry = 3;
let staffTry = 3;


function validateFormAdmin() {
    var username = document.getElementById("adminname").value;
    var password = document.getElementById("adminpassword").value;

    if (username=="admin" && password=="admin") {
        alert("Login successfully");
        window.location.href = "admin-page.html";
        return false;
    } else {
        adminTry--;
        alert("Login credentials incorrect. You have "+ adminTry +" attempts left.");

        if (adminTry === 0) {
            document.getElementById("adminSubmitBtn").disabled = true;
            document.getElementById("adminname").disabled = true;
            document.getElementById("adminpassword").disabled = true;
        }
        return false;

    }
}

function validateFormStaff() {
    var username = document.getElementById("staffname").value;
    var password = document.getElementById("staffpassword").value;

    if (username=="staff" && password=="staff") {
        alert("Login successfully");
        window.location.href = "staff-page.html";
        return false;
    } else {
        staffTry--;
        alert("Login credentials incorrect. You have "+staffTry+" attempts left.");

        if (staffTry === 0) {
            document.getElementById("staffSubmitBtn").disabled = true;
            document.getElementById("staffname").disabled = true;
            document.getElementById("staffpassword").disabled = true;
        }
        return false;
    }
}