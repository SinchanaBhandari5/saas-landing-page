
// Get the signup form
const signupForm = document.getElementById("signupForm");

// Get saved users from Local Storage
let users = JSON.parse(localStorage.getItem("launchlyUsers")) || [];

// Handle signup
signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Check password length
    if (password.length < 6) {
        document.getElementById("message").textContent =
            "Password must contain at least 6 characters.";
        return;
    }

    // Check duplicate email
    const existingUser = users.find(user =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
        document.getElementById("message").textContent =
            "This email is already registered.";
        return;
    }

    // Create user object
    const newUser = {
        name: name,
        email: email
    };

    // Save user
    users.push(newUser);

    localStorage.setItem(
        "launchlyUsers",
        JSON.stringify(users)
    );

    // Show dashboard
    document.getElementById("userName").textContent =
        "Name: " + name;

    document.getElementById("userEmail").textContent =
        "Email: " + email;

    document.getElementById("signup").hidden = true;
    document.getElementById("dashboard").hidden = false;

    document.getElementById("dashboard")
        .scrollIntoView({ behavior: "smooth" });

    // Clear form
    signupForm.reset();
});

// Back to Home button
document.getElementById("logoutBtn").addEventListener("click", function() {

    document.getElementById("dashboard").hidden = true;
    document.getElementById("signup").hidden = false;

    document.getElementById("home")
        .scrollIntoView({ behavior: "smooth" });
});
