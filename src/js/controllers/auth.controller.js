import { AuthModel } from '../models/auth.model.js';
import { LoginView } from '../views/login.view.js';

class AuthController {
    constructor() {
        this.model = new AuthModel();
        this.view = new LoginView();

        // Bind events
        this.view.bindLogin(this.handleLogin.bind(this));

        // Check if user is already logged in
        if (this.model.isLoggedIn()) {
            window.location.href = '/'; // Redirect to home if logged in
        }
    }

    async handleLogin(username, password) {
        this.view.clearError();

        if (!username || !password) {
            this.view.showError('Please fill in all fields');
            return;
        }

        const result = await this.model.login(username, password);
        
        if (result.success) {
            window.location.href = '/'; // Redirect to home page after successful login
        } else {
            this.view.showError(result.error);
        }
    }
}

// Initialize controller
new AuthController();
