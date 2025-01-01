export class LoginView {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
    }

    bindLogin(handler) {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const username = this.username.value.trim();
            const password = this.password.value.trim();
            
            handler(username, password);
        });
    }

    showError(message) {
        // Tạo hoặc cập nhật thông báo lỗi
        let errorDiv = document.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            this.form.insertBefore(errorDiv, this.form.firstChild);
        }
        errorDiv.textContent = message;
    }

    clearError() {
        const errorDiv = document.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    resetForm() {
        this.form.reset();
    }
}
