document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("currentUser");

    if (!loggedInUser && window.location.pathname.includes("stone_paper_scissor.html")) {
        alert("You need to log in first!");
        window.location.href = "index.html";
    }
});

// **Registration System (FIXED)**
document.querySelector(".new a").addEventListener("click", function(event) {
    event.preventDefault();

    let username = prompt("Enter a username:");
    let password = prompt("Enter a password:");

    if (!username || !password) {
        alert("Please enter valid credentials.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {
        alert("Username already exists! Choose another.");
    } else {
        users[username] = { password: password };
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! You can now log in.");
    }
});

// **Login System (FIXED)**
document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] && users[username].password === password) {
        localStorage.setItem("currentUser", username);
        alert("Login successful!");
        window.location.href = "stone_paper_scissor.html";
    } else {
        alert("Invalid username or password.");
    }
});

// **Logout Function**
function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}