// Lấy form và các input
const contactForm = document.getElementById('contact-form-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Hàm xử lý khi submit form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
});