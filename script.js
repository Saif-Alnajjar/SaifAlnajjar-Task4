document.addEventListener('DOMContentLoaded', () => {
    // تفاعل أزرار الحجز
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Redirecting to booking page...');
        });
    });

    // تفاعل أزرار التفاصيل
    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Loading course details...');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    const headerSignupBtn = document.getElementById('headerSignupBtn');

    // التبديل إلى واجهة الاشتراك
    toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    });

    headerSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    });

    // التبديل إلى واجهة الدخول
    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
    });

    // برمجة تسجيل الدخول (تجريبي)
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;

        // هنا يمكنك وضع شرط بسيط للدخول للموقع الداخلي
        if(email && pass) {
            alert('Logging in...');
            window.location.href = 'index.html'; // سينقلك للصفحة الرئيسية بعد الدخول
        }
    });
});

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    const pass = document.getElementById('signupPass').value;
    const confirm = document.getElementById('confirmPass').value;
    const agree = document.getElementById('agreeTerms').checked;

    if (pass !== confirm) {
        e.preventDefault();
        alert("Passwords do not match!");
    } else if (!agree) {
        e.preventDefault();
        alert("Please agree to the terms and policy.");
    }
});

function nextStep(stepNumber) {
    // إخفاء كل الخطوات
    document.querySelectorAll('.onboarding-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // إظهار الخطوة المطلوبة
    document.getElementById('step' + stepNumber).classList.add('active');
}

function closeOnboarding() {
    // إخفاء الواجهة بالكامل عند الانتهاء أو الضغط على Skip
    document.getElementById('onboarding-overlay').style.display = 'none';
    
    // توجيه المستخدم لصفحة الـ Dashboard الأساسية
    window.location.href = 'my-path.html';
}

// الانتقال من تسجيل الدخول إلى نسيان كلمة السر
document.getElementById('forgotPassLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('forgotPasswordBox').style.display = 'block';
});

// العودة لتسجيل الدخول
document.getElementById('backToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('forgotPasswordBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});

// فتح وإغلاق واجهة الفلترة (التي في النص)
const openBtn = document.getElementById('openFilter');
const closeBtn = document.getElementById('closeFilter');
const overlay = document.getElementById('filterOverlay');

openBtn.onclick = () => overlay.classList.add('open');
closeBtn.onclick = () => overlay.classList.remove('open');

// إغلاق عند الضغط خارج المربع
window.onclick = (event) => {
    if (event.target == overlay) overlay.classList.remove('open');
}

// دالة بسيطة للربط بين الصفحات
function goToDetails() {
    window.location.href = 'course-details.html';
}

function goToRegistration() {
    // نتحقق أولاً إذا كان المستخدم مسجل دخول (افتراضياً هنا نعم)
    const isLoggedIn = true; 
    
    if(isLoggedIn) {
        window.location.href = 'registration.html';
    } else {
        window.location.href = 'auth.html';
    }
}
