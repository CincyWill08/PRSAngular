import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})

export class PurchaseRequestLineItemCreateComponent implements OnInit {

	pagetitle: string = "Purchase Request Line Item Create";
	purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem(0,1,false,0,0);
	purchaseRequestId: string;
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

 create(): void{
 	this.purchaseRequestLineItem.PurchaseRequestId = this.purchaseRequestId;
 	console.log(this.purchaseRequestLineItem);
  	this.purchaseRequestLineItemSvc.Create(this.purchaseRequestLineItem)
  		.subscribe(res =>{
  			console.log(res);
  			this.router.navigateByUrl("/purchaserequests/lines/"+this.purchaseRequestId);
  		}) 	
  }

 getProductsList(): void {
    this.productSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", this.products);
      });    
  }

  ngOnInit() {

 	this.route.params
      .subscribe(parm => {
        this.purchaseRequestId = parm["prid"];
        console.log("purchaseRequestId: "+this.purchaseRequestId);
        this.getProductsList();

      });
    }
}


