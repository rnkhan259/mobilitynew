import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MobilitySQR';
  storedTheme: any = localStorage.getItem('theme-color');
  public spinkit = Spinkit;
  constructor(
    public router: Router,

  ) { }


  ngDoCheck() {
    this.storedTheme = localStorage.getItem('theme-color');
  }

  // setTheme(theme: any) {
  //   localStorage.setItem('theme-color', theme);
  //   this.storedTheme = localStorage.getItem('theme-color');
  // }
}
