document.addEventListener('DOMContentLoaded', function() {
    
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    // 1. Toggle between Login and Signup views
    if (toSignup) {
        toSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginSection.style.display = 'none';
            signupSection.style.display = 'block';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    // 2. Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const loginBtn = loginForm.querySelector('button[type="submit"]');
            loginBtn.innerHTML = 'Loading...';
            loginBtn.disabled = true;

            setTimeout(() => {
                window.location.href = 'home-logged-in.html';
            }, 1000);
        });
    }

    // 3. Signup Logic
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const signupBtn = signupForm.querySelector('button[type="submit"]');
            signupBtn.innerHTML = 'Creating Account...';
            signupBtn.disabled = true;

            setTimeout(() => {
                alert('Account Created! Please login.');
                signupSection.style.display = 'none';
                loginSection.style.display = 'block';
            }, 1500);
        });
    }
});
