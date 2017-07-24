import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['home']">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-controller="HeaderController as header">
          <ul class="nav navbar-nav">
            <li routerLinkActive="active">
              <a [routerLink]="['home']">Home</a>
            </li>
            <li routerLinkActive="active" *ngIf="loginService.authorised">
              <a [routerLink]="['users']">Users</a>
            </li>
            <li routerLinkActive="active">
              <a [routerLink]="['about']">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid slide">
      <router-outlet></router-outlet>
      <router-outlet name="bottom"></router-outlet>
    </div>
  `
})
export class AppComponent { 
  constructor(private loginService:LoginService) { }
}