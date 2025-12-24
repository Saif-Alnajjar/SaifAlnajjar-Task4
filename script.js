document.addEventListener('DOMContentLoaded', function() {
    
    // Elements Selection
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const forgotSection = document.getElementById('forgotSection');

    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    const toForgot = document.getElementById('toForgot');
    const backToLogin = document.getElementById('backToLogin');

    // --- Navigation Logic ---

    if (toSignup) {
        toSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none';
            signupSection.style.display = 'block';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    if (toForgot) {
        toForgot.addEventListener('click', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none';
            forgotSection.style.display = 'block';
        });
    }

    if (backToLogin) {
        backToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            forgotSection.style.display = 'none';
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    // --- Form Submission Logic ---

    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = loginForm.querySelector('button');
            btn.innerHTML = 'Logging in...';
            btn.disabled = true;

            setTimeout(() => {
                window.location.href = 'home-logged-in.html';
            }, 1000);
        });
    }

    // Signup Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = signupForm.querySelector('button');
            btn.innerHTML = 'Creating...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Account created successfully!');
                signupSection.style.display = 'none';
                loginSection.style.display = 'block';
                btn.innerHTML = 'Sign Up';
                btn.disabled = false;
            }, 1500);
        });
    }

    // Forgot Password Form
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = forgotForm.querySelector('button');
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('A reset link has been sent to your email.');
                forgotSection.style.display = 'none';
                loginSection.style.display = 'block';
                btn.innerHTML = 'Send Reset Link';
                btn.disabled = false;
            }, 1500);
        });
    }
});
