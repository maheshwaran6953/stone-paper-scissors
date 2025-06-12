<<<<<<< HEAD
=======
document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("currentUser");

    console.log("Checking login status:", loggedInUser); // Debugging

    // Prevent access to game page if not logged in
    if (window.location.pathname.includes("stone_paper_scissor.html") && !loggedInUser) {
        alert("You need to log in first!");
        window.location.href = "index.html";
    }
});

// **Registration Function (FIXED)**
document.querySelector(".new a").addEventListener("click", function(event) {
    event.preventDefault();

    let username = prompt("Enter a username:");
    let password = prompt("Enter a password:");

    if (!username || !password) {
        alert("Please enter valid credentials.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {}; // Get existing users or initialize empty object

    if (users[username]) {
        alert("Username already exists! Choose another.");
    } else {
        users[username] = { password: password };
        localStorage.setItem("users", JSON.stringify(users)); // Save updated user list
        alert("Registration successful! You can now log in.");
    }
});

// **Login Function (FIXED)**
>>>>>>> 7ff4699 (Fresh upload of Stone Paper Scissors game)
document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();
<<<<<<< HEAD
    let userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        localStorage.setItem("currentUser", username); // Store logged-in user
        alert("Login successful! Redirecting to game...");
=======
    let users = JSON.parse(localStorage.getItem("users")) || {}; // Get all registered users

    if (users[username] && users[username].password === password) {
        localStorage.setItem("currentUser", username);
        alert("Login successful!");
>>>>>>> 7ff4699 (Fresh upload of Stone Paper Scissors game)
        window.location.href = "stone_paper_scissor.html"; // Redirect after login
    } else {
        alert("Invalid username or password.");
    }
<<<<<<< HEAD
});
=======
});

// **Logout Function**
function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}
>>>>>>> 7ff4699 (Fresh upload of Stone Paper Scissors game)
