function text() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();

    var fname1 = /^[a-zA-Z]{3,20}$/;
    var lname1 = /^[a-zA-Z]{3,20}$/;
    var dob = /^\d{2}-\d{2}-\d{4}$/;

    

    if (!fname1.test(fname)) {
        alert("First name should contain 3 to 20 alphabetical letters");
        return false;
    }

    if (fname === "") {
        alert("Please enter the First Name");
        document.getElementById("fname").focus();
        return false;
    }

    if (!lname1.test(lname)) {
        alert("Last name should contain 3 to 20 alphabetical letters");
        return false;
    }

    if (lname === "") {
        alert("Please enter the Last Name");
        document.getElementById("lname").focus();
        return false;
    }

    return true;
}
