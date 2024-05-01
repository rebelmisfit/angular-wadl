import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin(): void {
    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    console.log('stored email ', storedEmail);
    console.log('stored password ', storedPassword);

    // Check if entered email and password match the ones in local storage
    if (this.email === storedEmail && this.password === storedPassword) {
      // Navigate to 'profile' path if they match
      this.router.navigate(['/profile']);
    } else {
      // Handle incorrect login credentials
      console.log('Incorrect email or password');
    }
  }
}
