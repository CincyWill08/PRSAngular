import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-purchase-request-line-item-edit',
  templateUrl: './purchase-request-line-item-edit.component.html',
  styleUrls: ['./purchase-request-line-item-edit.component.css']
})

export class PurchaseRequestLineItemEditComponent implements OnInit {

	pagetitle: string = "Purchase Request Line Item Edit";
	purchaseRequestLineItem: PurchaseRequestLineItem;
	purchaseRequestId: number;
	products: Product[];

  constructor(
  	private purchaseRequestLineItemSvc: PurchaseRequestLineItemService,
  	private productSvc: ProductService,
    private router: Router, 
  	private route: ActivatedRoute) { }

// This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
// this one uses Product instances.  For FKs with just the ID, it would be:
// comparFn(p1: number, p2: number)
compareFn(p1: number, p2: number): boolean{
	return p1 === p2;
}

 change(): void {
    console.log(this.purchaseRequestLineItem);
    this.purchaseRequestLineItemSvc.Change(this.purchaseRequestLineItem)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/lines/"+this.purchaseRequestId);
      });
  }

  getPurchaseRequestLineItemById(id){

	this.purchaseRequestLineItemSvc.Get(id)
      .subscribe(purchaseRequestLineItem => {
        this.purchaseRequestLineItem = purchaseRequestLineItem;
        console.log("PurchaseRequestLineItem:", purchaseRequestLineItem);

      });
  }

  ngOnInit() {

 	this.productSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", products);
      });

    this.route.params
      .subscribe(parms => {
        this.purchaseRequestId = parms["prid"];
        let id = parms["id"];
        this.getPurchaseRequestLineItemById(id);
      });  
    }

}

