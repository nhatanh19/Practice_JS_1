import './../../styles/main.scss';

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // Update icon based on password visibility
        togglePassword.querySelector('img').src = type === 'password' ? 'eye-icon.svg' : 'eye-off-icon.svg';
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);

        // You can add your API call here
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
    });
});