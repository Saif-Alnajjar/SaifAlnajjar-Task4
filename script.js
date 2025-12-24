document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const forgotSection = document.getElementById('forgotSection');

    // Navigation Links
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    const toForgot = document.getElementById('toForgot');
    const backToLogin = document.getElementById('backToLogin');

    // Navigation Logic (Switching Views)
    if (toSignup) toSignup.onclick = (e) => { e.preventDefault(); loginSection.style.display = 'none'; signupSection.style.display = 'block'; };
    if (toLogin) toLogin.onclick = (e) => { e.preventDefault(); signupSection.style.display = 'none'; loginSection.style.display = 'block'; };
    if (toForgot) toForgot.onclick = (e) => { e.preventDefault(); loginSection.style.display = 'none'; forgotSection.style.display = 'block'; };
    if (backToLogin) backToLogin.onclick = (e) => { e.preventDefault(); forgotSection.style.display = 'none'; loginSection.style.display = 'block'; };

    // --- 1. SIGN UP LOGIC (Actually saving data) ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            const name = signupForm.querySelector('input[type="text"]').value;
            const email = signupForm.querySelector('input[type="email"]').value;
            const password = signupForm.querySelector('input[type="password"]').value;

            // Store in LocalStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            localStorage.setItem('userName', name);

            alert('Account created successfully for ' + name + '! You can now login.');
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        };
    }

    // --- 2. LOGIN LOGIC (Checking against saved data) ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail').value;
            const passInput = document.getElementById('loginPass').value;

            // Get data from LocalStorage
            const storedEmail = localStorage.getItem('userEmail');
            const storedPass = localStorage.getItem('userPassword');

            // Hardcoded "Master Account" (Optional: you can use this too)
            const masterEmail = "admin@shifra.com";
            const masterPass = "123456";

            if ((emailInput === storedEmail && passInput === storedPass) || (emailInput === masterEmail && passInput === masterPass)) {
                const btn = loginForm.querySelector('button');
                btn.innerHTML = 'Verifying...';
                setTimeout(() => {
                    window.location.href = 'home-logged-in.html';
                }, 1000);
            } else {
                alert('Invalid Email or Password. Please try again or create a new account.');
            }
        };
    }

    // --- 3. FORGOT PASSWORD LOGIC ---
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.onsubmit = function(e) {
            e.preventDefault();
            const email = forgotForm.querySelector('input').value;
            const storedEmail = localStorage.getItem('userEmail');

            if (email === storedEmail || email === "admin@shifra.com") {
                alert('Reset link sent to: ' + email);
                forgotSection.style.display = 'none';
                loginSection.style.display = 'block';
            } else {
                alert('Email not found in our records.');
            }
        };
    }
});
