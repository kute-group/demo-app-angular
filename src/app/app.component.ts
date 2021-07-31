// import external libs
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import internal libs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  @Output() dismissButtonCallback?: EventEmitter<any> = new EventEmitter();
  amount: number;
  isHomePage: boolean;

  constructor(private router: Router) {
    this.amount = 1000;
    console.log(router.url);
    this.isHomePage = false

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isHomePage = event.url === '/';
          console.log('Current router', event);
        }
      });
  }
}
