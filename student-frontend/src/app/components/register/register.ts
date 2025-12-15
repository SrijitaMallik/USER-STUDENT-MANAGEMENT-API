import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: res => {
        this.message = res.message;
        this.error = '';
      },
      error: () => {
        this.error = 'Registration failed';
        this.message = '';
      }
    });
  }
}
