import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../services/system.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

 	title = 'Logout';
    user: User = new User(0, '', '', '', '', '', '', false, false, false);
  	message: string = " ";


  constructor(
 	private UserSvc: UserService,
    private SysSvc: SystemService,
    private router: Router
  	) { }

  logout(): void {
    this.SysSvc.clearLoggedInUser();
    console.log("Logout Clear Successful");
    		
    this.SysSvc.setNotLogin()
    console.log("Logout Set Successful");

    this.router.navigateByUrl("/users/login");
  }

  ngOnInit() {

  }

}
