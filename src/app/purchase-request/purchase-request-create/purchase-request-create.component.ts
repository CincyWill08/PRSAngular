import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  pagetitle: string = "Purchase Request Create";

  purchaseRequest: PurchaseRequest = new PurchaseRequest(0, '', '', '', 0, false, '', 0);
  users: User[];

  constructor(
  	private purchaseRequestSvc: PurchaseRequestService,
  	private userSvc: UserService,
  	private router: Router
  	) { }

// This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
// this one uses User instances.  For FKs with just the ID, it would be:
// comparFn(u1: number, u2: number)
compareFn(u1: number, u2: number): boolean{
	return u1 === u2;
}

  create(): void{
  	this.purchaseRequestSvc.Create(this.purchaseRequest)
  		.subscribe(res =>{
  			console.log(res);
  			this.router.navigateByUrl("/purchaserequests/list");
  		}) 	
  }

  ngOnInit() {
  	  	this.userSvc.List()
  		.subscribe(users => {
  			this.users = users;
  			console.log("Users", users);
  		})
  	};

}

