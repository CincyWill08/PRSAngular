import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userIn: User;
  loggedInUser: User;
  display: boolean = true;

  menuItems: Menu[] = [
  	new Menu("Home", "/home", "Home Page"),
    new Menu("Users", "/users/list", "The user list display"),
    new Menu("Vendors", "/vendors/list", "The vendor list display"),
    new Menu("Products", "/products/list", "The product list display"),
    new Menu("Purchase Requests", "/purchaserequests/list", "The purchase request list display"),
    new Menu("Review", "/purchaserequests/review", "The requests review display"),
    new Menu("About", "/about", "About Page"),
    new Menu("Logout", "/users/logout", "The Logout Page")
  ];

  constructor(
    private UserSvc: UserService,
    private SysSvc: SystemService,
    ) { }

  ngOnInit() {
     
     this.SysSvc.loggedInUser.subscribe(user => this.loggedInUser = user);

     // if (this.loggedInUser.IsReviewer == false){
     //    this.display = false;
     // }
     // this.userIn = this.SysSvc.getLoggedInUser();
     // console.log("1. UserIn Reviewer", this.display);
     // if (this.userIn.IsReviewer == false) {
     //     this.display = false;
     //     console.log("1. UserIn Reviewer", this.display);
     // }
  }

}
