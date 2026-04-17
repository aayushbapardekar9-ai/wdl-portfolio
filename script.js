function validateForm() {
    // Basic Validation: Checking for empty fields [cite: 550]
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Please enter your full name."); [cite, 585, 587]
        return false;
    }

    // Data Format Validation: Email check [cite: 551, 598]
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid college email address.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}