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
