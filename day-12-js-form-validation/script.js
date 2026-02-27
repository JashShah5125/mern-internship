document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");

    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;

        successMessage.textContent = "";

        if (fullName.value.trim() === "") {
            nameError.textContent = "Full Name is required";
            isValid = false;
        } else if (fullName.value.trim().length < 3) {
            nameError.textContent = "Full Name must be at least 3 characters";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!email.value.match(emailPattern)) {
            emailError.textContent = "Enter a valid email address";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (password.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        const phonePattern = /^[0-9]+$/;

        if (phone.value.trim() === "") {
            phoneError.textContent = "Phone number is required";
            isValid = false;
        } else if (!phone.value.match(phonePattern)) {
            phoneError.textContent = "Phone must contain only numbers";
            isValid = false;
        } else if (phone.value.length < 10) {
            phoneError.textContent = "Phone number must be at least 10 digits";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        if (isValid) {
            successMessage.textContent = "Form Submitted Successfully!";
            form.reset();
        }

    });

});