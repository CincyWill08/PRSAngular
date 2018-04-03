import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';

@Component({
  selector: 'app-purchase-request-review-item',
  templateUrl: './purchase-request-review-item.component.html',
  styleUrls: ['./purchase-request-review-item.component.css']
})
export class PurchaseRequestReviewItemComponent implements OnInit {

  pagetitle: string = "Purchase Request Review";
  purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }


  approve(){
    this.change("APPROVED");
  }

  reject(){
  	this.change("REJECTED");
  }

  change(status){
    this.purchaseRequest.Status = status;
    this.PurchaseRequestSvc.Change(this.purchaseRequest)
      .subscribe(res =>{
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/list");
      })
  }

  getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id)
      .subscribe(purchaseRequest => {
        this.purchaseRequest = purchaseRequest;
        console.log("PurchaseRequest:", purchaseRequest);
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

