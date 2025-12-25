// 1. التبديل بين الأقسام (إظهار وإخفاء الصناديق)
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');
const toForgot = document.getElementById('toForgot');
const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');

const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');
const forgotSection = document.getElementById('forgotSection');

// دالة لتغيير الأقسام بسلاسة
const showSection = (sectionToShow) => {
    if(loginSection) loginSection.style.display = 'none';
    if(signupSection) signupSection.style.display = 'none';
    if(forgotSection) forgotSection.style.display = 'none';
    sectionToShow.style.display = 'block';
};

if(toSignup) toSignup.onclick = () => showSection(signupSection);
if(toLogin) toLogin.onclick = () => showSection(loginSection);
if(toForgot) toForgot.onclick = () => showSection(forgotSection);
if(backToLoginFromForgot) backToLoginFromForgot.onclick = () => showSection(loginSection);

// 2. نظام التسجيل (Sign Up) - حفظ البيانات
const signupForm = document.getElementById('signupForm');
if(signupForm) {
    signupForm.onsubmit = (e) => {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
        const confirmPass = signupForm.querySelectorAll('input[type="password"]')[1].value;

        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem(email, password);
        alert("Account created successfully! Now you can login.");
        showSection(loginSection);
    };
}

// 3. نظام تسجيل الدخول مع التوجيه لـ "داخل الموقع"
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;
        const savedPassword = localStorage.getItem(email);

        if (savedPassword && savedPassword === pass) {
            const loader = document.getElementById('loaderScreen');
            const bar = document.getElementById('loaderBar');
            
            if(loader && bar) {
                loader.style.display = 'flex';
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 5;
                    bar.style.width = progress + '%';
                    
                    if (progress >= 100) {
                        clearInterval(interval);
                        // التغيير هنا: بدلاً من index.html ننتقل لصفحة "داخل الموقع"
                        window.location.href = 'home-logged-in.html'; 
                    }
                }, 50);
            } else {
                window.location.href = 'home-logged-in.html';
            }
        } else {
            alert("Invalid! This account does not exist or password is wrong.");
        }
    };
}
