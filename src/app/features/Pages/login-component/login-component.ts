import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../core/services/content-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss'],
})
export class LoginComponent implements OnInit {

  loginData: any;

  email = '';
  password = '';

  constructor(private content: ContentService) {}

  ngOnInit(): void {
    this.loginData = this.content.getLoginData();
  }

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}