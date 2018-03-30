import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItemService} from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { PurchaseRequestService} from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';

@Component({
  selector: 'app-purchase-request-line-item-detail',
  templateUrl: './purchase-request-line-item-detail.component.html',
  styleUrls: ['./purchase-request-line-item-detail.component.css']
})

export class PurchaseRequestLineItemDetailComponent implements OnInit {

	pagetitle: string = "Purchase Request Line Item Detail";
	purchaseRequestLineItem: PurchaseRequestLineItem;
	purchaseRequestId: number;

  constructor(private purchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private router: Router, 
  	private route: ActivatedRoute) { }

  remove(): void {
    this.purchaseRequestLineItemSvc.Remove(this.purchaseRequestLineItem)
      .subscribe(res => {
          console.log(res);
          this.router.navigateByUrl("/purchaserequests/lines/"+this.purchaseRequestId);
      });
    
  }

  getPurchaseRequestLineitemById(id){
  	this.purchaseRequestLineItemSvc.Get(id)
  	.subscribe(purchaseRequestLineItem => {
  		this.purchaseRequestLineItem = purchaseRequestLineItem;
  		console.log("Purchase Request Line Item:", purchaseRequestLineItem);
  	});
  }

  ngOnInit() {
  	 this.route.params
      .subscribe(parms => {
        this.purchaseRequestId = parms["prid"];
        let id = parms["id"];
        this.getPurchaseRequestLineitemById(id);
      });  
    }

}
