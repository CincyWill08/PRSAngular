import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

	pagetitle: string = "Purchase Request Change";

	purchaseRequest: PurchaseRequest;
	users: User[];

  constructor(
  	private purchaseRequestSvc: PurchaseRequestService,
  	private userSvc: UserService,
  	private route: ActivatedRoute,
  	private router: Router
  	) { }

// This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
// this one uses User instances.  For FKs with just the ID, it would be:
// comparFn(u1: number, u2: number)
compareFn(u1: number, u2: number): boolean{
	return u1 === u2;
}

  change(): void{
  	this.purchaseRequestSvc.Change(this.purchaseRequest)
  		.subscribe(res =>{
  			console.log(res);
  			this.router.navigateByUrl("/purchaserequests/list");
  		})
  	
  }

 getPurchaseRequestById(id){
  	this.purchaseRequestSvc.Get(id)
  	.subscribe(purchaseRequest => {
  		this.purchaseRequest = purchaseRequest;
  		console.log("Purchase Request:", purchaseRequest);
  	});
  }

  ngOnInit() {

  	this.userSvc.List()
  		.subscribe(users => {
  			this.users = users;
  			console.log("Users", users);
  		})

  	this.route.params
  	.subscribe(parms => {
  		let id = parms["id"];
  		this.getPurchaseRequestById(id);
  	});

}
}
