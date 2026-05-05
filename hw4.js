/*
Name: Abel Kurian
Date created: 3/26/26
Date last edited: 5/4/26
Version: 4.0
Description: Homework 4 JS 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("todaydate").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};


//validate First Name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name is required.";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes and dashes only.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be longer than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}


//validate Middle Name
function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}


//validate Last Name
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name is required.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes and dashes only.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be longer than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}


//validate Date of Birth
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}


//validate SSN
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}


//validate Address1
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter your address on the address line.";
        return false;
    }
    else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}


//validate city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City is required.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}


//validate Zip Code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}


//validate email
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}   


//validate phone number
function validatePhonen() {
    const phoneInput = document.getElementById("phonen");
    const phone = phoneInput.value.replace(/\D/g,"");

    if (phone.length != 10) {
        document.getElementById("phonen-error").innerHTML = "Phone Number is required.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phonen-error").innerHTML = "";
    return true;
}


//validate username
function validateUsername() {
    username = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = username;

    if (username.length == 0) {
        document.getElementById("username-error").innerHTML = 
        "Username can't be blank";
        return false;
    }

    if (!isNaN(username.charAt(0))) {
        document.getElementById("username-error").innerHTML = 
        "Username can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = 
        "Username can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (username.length < 5) {
        document.getElementById("username-error").innerHTML = 
        "Username must be at least 5 characters";
        return false;
    } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML = 
        "Username can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}


//validate password
function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    const errorMessage = [];

    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage.map(msg => `<span>${msg}</span><br>`).join("");
    return errorMessage.length === 0;
}


//validate confirm password
function validateCpass() {
    pword1 = document.getElementById("pass").value;
    pword2 = document.getElementById("cpass").value;

    if (pword1 !== pword2) {
        document.getElementById("cpass-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("cpass-error").innerHTML = 
        "Passwords match";
        return true;
    }
}


//review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;

        if (name === "fname") name = "First Name";
    if (name === "mname") name = "Middle Initial";
    if (name === "lname") name = "Last Name";
    if (name === "pgender") name = "Gender";
    if (name === "dob") name = "Date of Birth";
    if (name === "ssn") name = "ID Number";
    if (name === "address1") name = "Address Line 1";
    if (name === "address2") name = "Address Line 2";
    if (name === "city") name = "City";
    if (name === "state") name = "State";
    if (name === "zcode") name = "Zip Code";
    if (name === "email") name = "Email Address";
    if (name === "phonen") name = "Phone Number";
    if (name === "option1") name = "Sore Throat";
    if (name === "option2") name = "Fever";
    if (name === "option3") name = "Headache";
    if (name === "option4") name = "Cough";
    if (name === "option5") name = "Shortness of Breath";
    if (name === "option6") name = "None";
    if (name === "vacc") name = "Have you been vaccinated?";
    if (name === "insur") name = "Do you have insurance?";
    if (name === "notes") name = "Additional Notes";
    if (name === "range") name = "Pain Level (0 to 10)";
    if (name === "username") name = "User ID";
    if (name === "pass") name = "Password";
    if (name === "cpass") name = "Confirm Password";


        var value = el.value;

        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='left'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='left'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                
                if (value !== "0") {
                    formoutput += "<tr><td align='left'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='left'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }
    

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}


//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//show alert box
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closealert = document.getElementById("close-alert");

    alertBox.style.display = "block";

    closealert.onclick = function() {
        alertBox.style.display = "none";
    }   
}

//validate everything
function validateForm() {
    let valid = true;

    if (!validateFname()) { 
        valid = false; 
    }
    if (!validateMname()) { 
        valid = false; 
    }
    if (!validateLname()) { 
        valid = false; 
    }
    if (!validateDob()) { 
        valid = false; 
    }
    if (!validateSsn()) { 
        valid = false; 
    }
    if (!validateAddress1()) { 
        valid = false; 
    }
    if (!validateCity()) { 
        valid = false; 
    }
    if (!validateZcode()) { 
        valid = false; 
    }
    if (!validateEmail()) { 
        valid = false; 
    }
    if (!validatePhonen()) { 
        valid = false; 
    }
    if (!validateUsername()) { 
        valid = false; 
    }
    if (!validatePass()) { 
        valid = false; 
    }
    if (!validateCpass()) { 
        valid = false; 
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    } 
    else {
        showAlert();
    }
}

//cookies expire
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

//retreive cookie value
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "mname", cookieName: "middleName"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
    {id: "ssn", cookieName: "ssn"},
    {id: "address1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zcode", cookieName: "zipCode"},
    {id: "email", cookieName: "email"},
    {id: "phonen", cookieName: "phone"},
    {id: "username", cookieName: "userName"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // putting a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//welcome message with name
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

//cookie storage (remeber me button)
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

// remove stored cookies
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

//cookies deleted "remember me"
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});
