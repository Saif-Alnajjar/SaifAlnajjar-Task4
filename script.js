// 1. التبديل بين الأقسام (إظهار وإخفاء الصناديق)
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');
const toForgot = document.getElementById('toForgot');
const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');

const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');
const forgotSection = document.getElementById('forgotSection');

toSignup.onclick = () => { loginSection.style.display = 'none'; signupSection.style.display = 'block'; }
toLogin.onclick = () => { signupSection.style.display = 'none'; loginSection.style.display = 'block'; }
toForgot.onclick = () => { loginSection.style.display = 'none'; forgotSection.style.display = 'block'; }
backToLoginFromForgot.onclick = () => { forgotSection.style.display = 'none'; loginSection.style.display = 'block'; }

// 2. نظام التسجيل (Sign Up) - حفظ البيانات في المتصفح
const signupForm = document.getElementById('signupForm');

signupForm.onsubmit = (e) => {
    e.preventDefault();
    
    // سحب البيانات من الحقول
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPass = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    // حفظ الحساب في الذاكرة (localStorage)
    localStorage.setItem(email, password);
    alert("Account created successfully! Now you can login.");
    
    // العودة لصفحة الدخول
    signupSection.style.display = 'none';
    loginSection.style.display = 'block';
};

// 3. نظام تسجيل الدخول (Login) - التأكد من وجود الحساب
const loginForm = document.getElementById('loginForm');

loginForm.onsubmit = (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;

    // التأكد من الذاكرة
    const savedPassword = localStorage.getItem(email);

    if (savedPassword && savedPassword === pass) {
        alert("Welcome back!");
        window.location.href = 'home-logged-in.html'; // الصفحة التي تفتح بعد النجاح
    } else {
        alert("Invalid! This account does not exist or password is wrong.");
    }
};
