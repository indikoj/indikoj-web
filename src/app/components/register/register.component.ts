import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/User';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Register } from 'src/app/shared/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  register: Register = new Register();
  loading = false;
  error = '';
  email: string;
  constructor(private router: Router, private auth: AuthService) { }

  onRegister(): void {
    this.register.userType = "USER";
    this.auth.register(this.register)
    .then((register) => {
      console.log(register);
        this.router.navigate(['/login']);
    })
    .catch((err) => {
      console.log(err);
      this.error = 'register nao ocorreu!';
      this.loading = false;
    });
  }

  ngOnInit() {
  }
}
