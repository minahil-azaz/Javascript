const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // get values
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const message = document.getElementById("message").value.trim();

    // get error fields
    const firstNameError = document.getElementById("first_name_error");
    const lastNameError = document.getElementById("last_name_error");
    const emailError = document.getElementById("email_error");
    const phoneError = document.getElementById("phone_error");
    const passwordError = document.getElementById("password_error");
    const confirmPasswordError = document.getElementById("confirm_password_error");
    const messageError = document.getElementById("message_error");

    // reset errors
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // validations
    if (firstName.length < 3) {
        firstNameError.textContent = "First name must be at least 3 characters";
        isValid = false;
    }

    if (lastName.length < 3) {
        lastNameError.textContent = "Last name must be at least 3 characters";
        isValid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (phone.length < 10) {
        phoneError.textContent = "Enter a valid phone number";
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        console.log({ firstName, lastName, email, phone, message });
    }
});