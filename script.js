document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SIGN UP LOGIC ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const signupBtn = signupForm.querySelector('button[type="submit"]');
            signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
            signupBtn.disabled = true;

            // Simulate server delay then redirect to login
            setTimeout(() => {
                window.location.href = 'auth.html'; 
            }, 1500);
        });
    }

    // --- 2. LOGIN LOGIC ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailField = document.getElementById('loginEmail');
            const passField = document.getElementById('loginPass');

            if (emailField && passField) {
                const loginBtn = loginForm.querySelector('button[type="submit"]');
                loginBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Loading...';
                loginBtn.disabled = true;

                // Move to the internal student dashboard
                setTimeout(() => {
                    window.location.href = 'home-in.html'; 
                }, 1200);
            }
        });
    }

    // --- 3. LOGOUT LOGIC (Optional) ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
});
