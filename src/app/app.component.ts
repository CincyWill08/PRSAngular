import { Component } from '@angular/core';
import { SystemService } from './services/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 

export class AppComponent {
 
 	title = 'app';

	isLogin;
  	get login() { return "Login is " + this.isLogin; }

	constructor(private SysSvc: SystemService) {
  }

	ngOnInit() {
    this.SysSvc.isLogin.subscribe(bool => this.isLogin = bool);
  }

}
