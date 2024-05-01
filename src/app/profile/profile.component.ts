import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
username : string = '';
email : string = '';
password : string = '';
constructor()
{

}
ngOnInit()
{
  this.username = localStorage.getItem('username') || '';
  this.email = localStorage.getItem('email')|| '';
  this.password = localStorage.getItem('password')|| '';

}
}
