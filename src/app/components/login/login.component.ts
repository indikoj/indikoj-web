import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 
  user = new User();
  constructor(private router: Router) { }

  login() : void {
    if(this.user.usuario == 'admin' && this.user.password == 'admin'){
     localStorage.setItem('usuarioLogado', "rogerio");
     this.router.navigate(["filmes"]);
    }else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }

}
