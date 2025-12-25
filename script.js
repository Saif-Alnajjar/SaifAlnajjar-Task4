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
    [loginSection, signupSection, forgotSection].forEach(sec => sec.style.display = 'none');
    sectionToShow.style.display = 'block';
};

toSignup.onclick = () => showSection(signupSection);
toLogin.onclick = () => showSection(loginSection);
toForgot.onclick = () => showSection(forgotSection);
backToLoginFromForgot.onclick = () => showSection(loginSection);

// 2. نظام التسجيل (Sign Up) - حفظ البيانات في المتصفح
const signupForm = document.getElementById('signupForm');

signupForm.onsubmit = (e) => {
    e.preventDefault();
    
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPass = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    // حفظ الحساب في الذاكرة
    localStorage.setItem(email, password);
    alert("Account created successfully! Now you can login.");
    showSection(loginSection);
};

// 3. نظام تسجيل الدخول مع شاشة التحميل (الصور التي أرسلتِها)
const loginForm = document.getElementById('loginForm');

loginForm.onsubmit = (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;

    // التأكد من الذاكرة
    const savedPassword = localStorage.getItem(email);

    if (savedPassword && savedPassword === pass) {
        // --- بدء عملية التحميل (Loading Process) ---
        const loader = document.getElementById('loaderScreen');
        const bar = document.getElementById('loaderBar');
        
        if(loader && bar) {
            loader.style.display = 'flex'; // إظهار شاشة التحميل
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5; // سرعة الزيادة في الشريط
                bar.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    window.location.href = 'index.html'; // الانتقال للصفحة الرئيسية بعد انتهاء الشريط
                }
            }, 50); // التحكم بالسرعة (كلما قل الرقم زادت السرعة)
        } else {
            // في حال لم تضعي كود الـ HTML الخاص بالشاشة بعد، سينقل الفتح فوراً
            window.location.href = 'index.html';
        }
    } else {
        alert("Invalid! This account does not exist or password is wrong.");
    }
};
