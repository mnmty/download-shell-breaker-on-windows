// منوی موبایل
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// بستن منو با کلیک روی لینک
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// دکمه CTA
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('شروع کردیم!');
});