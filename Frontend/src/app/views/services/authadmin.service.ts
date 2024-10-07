import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthadminService {
  private helper = new JwtHelperService();
  private tokenKey = 'token'; // Constant for token key

  constructor(private http: HttpClient) {}

  // Login method to post user credentials and get token
  login(data: any) {
    return this.http.post('http://localhost:3000/admin/login', data);
  }

  // Save the token to local storage
  saveDataProfil(token: any) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve username from the decoded token
  getUsername() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
      return decodedToken?.username || null; // Use optional chaining
    }
    return null;
  }

  // Check if the user is logged in and has the correct role
  LoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return false; // No token found
    }

    try {
      const decodedToken = this.helper.decodeToken(token);
      if (decodedToken.role !== 'Admin') {
        return false; // Role is not Admin
      }
      if (this.helper.isTokenExpired(token)) {
        return false; // Token is expired
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return false; // Return false if token cannot be decoded
    }

    return true; // User is logged in and has the correct role
  }

  // Method to remove token (logout)
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
