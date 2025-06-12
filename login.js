document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();
    let userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        localStorage.setItem("currentUser", username); // Store logged-in user
        alert("Login successful! Redirecting to game...");
        window.location.href = "stone_paper_scissor.html"; // Redirect after login
    } else {
        alert("Invalid username or password.");
    }
});