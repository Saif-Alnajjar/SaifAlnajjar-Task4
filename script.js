document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SIGN UP LOGIC
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const signupBtn = signupForm.querySelector('button[type="submit"]');
            if (signupBtn) {
                signupBtn.innerHTML = 'Creating Account...';
                signupBtn.disabled = true;
            }

            setTimeout(() => {
                window.location.href = 'auth.html'; 
            }, 1500);
        });
    }

    // 2. LOGIN LOGIC
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailField = document.getElementById('loginEmail');
            const passField = document.getElementById('loginPass');

            if (emailField && passField) {
                const loginBtn = loginForm.querySelector('button[type="submit"]');
                if (loginBtn) {
                    loginBtn.innerHTML = 'Logging in...';
                    loginBtn.disabled = true;
                }

                // IMPORTANT: This now matches your file name exactly
                setTimeout(() => {
                    window.location.href = 'home-logged-in.html'; 
                }, 1000);
            }
        });
    }

    // 3. LOGOUT LOGIC
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
});
