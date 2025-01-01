export class AuthModel {
    constructor() {
        this.apiUrl = 'http://localhost:3000'; // JSON Server URL
    }

    async login(username, password) {
        try {
            const response = await fetch(`${this.apiUrl}/users?username=${username}`);
            const users = await response.json();
            
            // Trong thực tế, password nên được hash và so sánh ở server
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Lưu thông tin đăng nhập
                localStorage.setItem('user', JSON.stringify(user));
                return { success: true, user };
            } else {
                throw new Error('Invalid username or password');
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLoggedIn() {
        return localStorage.getItem('user') !== null;
    }
}
