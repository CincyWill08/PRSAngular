import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

	pagetitle: string = "Purchase Request Detail";
	purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private router: Router, 
  	private route: ActivatedRoute
    ) { }

  review(): void{
    
    if (this.purchaseRequest.Total <= 50) {
      this.purchaseRequest.Status = "APPROVED";
    }
    else {
      this.purchaseRequest.Status = "REVIEW";
    }

    this.purchaseRequestSvc.Change(this.purchaseRequest)
      .subscribe(res =>{
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/list");
      })
  }

  verify(): void {
    this.isHidden = false;
  }

  remove(): void {
    this.purchaseRequestSvc.Remove(this.purchaseRequest)
      .subscribe(res => {
          console.log(res);
          this.router.navigateByUrl("/purchaserequests/list");
      });
    
  }

  getPurchaseRequestById(id){
  	this.purchaseRequestSvc.Get(id)
  	.subscribe(purchaseRequest => {
  		this.purchaseRequest = purchaseRequest;
  		console.log("Purchase Request:", purchaseRequest);
  	});
  }

  ngOnInit() {
  	this.route.params
  	.subscribe(parms => {
  		let id = parms["id"];
  		this.getPurchaseRequestById(id);
  	});

  }

}

