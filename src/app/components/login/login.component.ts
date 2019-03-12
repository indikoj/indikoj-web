import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/User';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 
  user: User = new User();
  token: string;
  loading = false;
  error = '';
  email: string;
  constructor(private router: Router, private auth: AuthService) { }

  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      console.log(user);
     
      let resultToken = user && user.token;

      if (resultToken) {
        this.token = user.token;
        console.log(this.token);

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify({ username: user.userId, token: this.token }));
        console.log('setLocalstorge: ' + localStorage.getItem('token'));

        this.router.navigate(['/dashboard']);
      }
      
    })
    .catch((err) => {
      console.log(err);

      this.error = 'Usuário e senha estão incorretos!';
      this.loading = false;
    });
  }

  onLogout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }

   /* if(this.user.usuario == 'admin' && this.user.password == 'admin'){
     localStorage.setItem('usuarioLogado', "rogerio");
     this.router.navigate(["filmes"]);
    }else {
      alert("Invalid credentials");
    }
  }*/

  ngOnInit() {
  }

}
