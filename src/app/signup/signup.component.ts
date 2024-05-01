import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
email : string = '';
password : string = '';
username : string = '';

constructor(private router : Router)
{

}
onSubmit(){
localStorage.setItem('email', this.email);
localStorage.setItem('password', this.password);
localStorage.setItem('username', this.username);

// navigating to next page 
this.router.navigate(['/profile']);

}
ToLogin()
{
  this.router.navigate(['/login'])
}
}
