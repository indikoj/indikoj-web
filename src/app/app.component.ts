import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'filmes';

  constructor(private router: Router) { }

  navigate(menu: string) {
    if (menu === 'logout') {
      this.logout();
    } else {
      this.chageMenu(menu);
    }
      
    /*if (menu === 'filmes') {
      this.router.navigate(['/filmes']);
    } else if (menu === 'categorias') {
      this.router.navigate(['/categorias']);
    } else if (menu === ) {
      
    } else if (menu === 'tipo-servicos') {
      this.router.navigate(['/tipo-servicos']);
    } else if (menu === 'dashboard') {
      this.router.navigate(['/dashboard ']);
    }*/
  }

  chageMenu(menu:string):void {
    this.router.navigate(['/'+ menu +'']);
  } 

  logout() {
    localStorage.setItem("usuarioLogado", "");
    this.router.navigate(['/login']);
  }
}
