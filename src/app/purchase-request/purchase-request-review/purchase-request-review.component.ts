import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})


export class PurchaseRequestReviewComponent implements OnInit {


	pagetitle: string = "Purchase Request Review";s
	purchaserequests: PurchaseRequest[];

  constructor(private purchaseRequestSvc: PurchaseRequestService) { }


  ngOnInit() {

  	this.purchaseRequestSvc.ReviewList()
  		.subscribe(purchaserequests => {
  			console.log(purchaserequests);
  			this.purchaserequests = purchaserequests;
  		});
  }

}
