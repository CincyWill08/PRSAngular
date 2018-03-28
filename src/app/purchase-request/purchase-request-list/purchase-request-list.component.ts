import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})


export class PurchaseRequestListComponent implements OnInit {


	pagetitle: string = "PurchaseRequest List";
	purchaserequests: PurchaseRequest[];

  constructor(private purchaseRequestSvc: PurchaseRequestService) { }


  ngOnInit() {

  	this.purchaseRequestSvc.List()
  		.subscribe(purchaserequests => {
  			console.log(purchaserequests);
  			this.purchaserequests = purchaserequests;
  		});
  }

}
