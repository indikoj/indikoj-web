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
  }

  chageMenu(menu:string):void {
    this.router.navigate(['/'+ menu +'']);
  } 

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
