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
