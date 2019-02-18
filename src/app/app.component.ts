import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'filmes';
  
  constructor(private router: Router) {}

  navigate(menu: string) {
    if (menu === 'filmes') {
      this.router.navigate(['/filmes']);
    } else if (menu === 'categorias') {
      this.router.navigate(['/categorias']);
    } else if (menu === 'logout') {
      this.logout();
    } else if (menu === 'tipo-servicos') {
      this.router.navigate(['/tipo-servicos']);
    }
  }

  logout() {
    localStorage.setItem("usuarioLogado", "");
    this.router.navigate(['/login']);
  }
}
