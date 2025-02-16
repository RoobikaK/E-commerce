// Check if the user is logged in by checking localStorage
window.onload = function() {
    const userInitial = document.getElementById('user-initial');
    const loginBtn = document.getElementById('login-btn');

    // If the user is logged in, show their initial instead of the login button
    const userData = localStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);
        const firstInitial = user.email.charAt(0).toUpperCase();
        userInitial.textContent = firstInitial;
        loginBtn.style.display = 'none'; // Hide login button
    }
};

// Handle the login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally and reloading the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password are provided
    if (email && password) {
        // Simulate user login by storing user data in localStorage
        const user = { email: email, password: password };
        localStorage.setItem('userData', JSON.stringify(user));

        // Redirect to the homepage after login
        window.location.href = 'index.html';  // Redirect to home page

    } else {
        alert('Please enter both email and password');  // Alert if fields are empty
    }
});
