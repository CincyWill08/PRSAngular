import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

	pagetitle: string = "Product Change";

	product: Product;
	vendors: Vendor[];

  constructor(
  	private productSvc: ProductService,
  	private vendorSvc: VendorService,
  	private route: ActivatedRoute,
  	private router: Router
  	) { }

// This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
// this one uses Vendor instances.  For FKs with just the ID, it would be:
// comparFn(v1: number, v2: number)
compareFn(v1: number, v2: number): boolean{
	return v1 === v2;
}

  change(): void{
  	this.productSvc.Change(this.product)
  		.subscribe(res =>{
  			console.log(res);
  			this.router.navigateByUrl("/products/list");
  		})
  	
  }

 getProductById(id){
  	this.productSvc.Get(id)
  	.subscribe(product => {
  		this.product = product;
  		console.log("Product:", product);
  	});
  }

  ngOnInit() {

  	this.vendorSvc.List()
  		.subscribe(vendors => {
  			this.vendors = vendors;
  			console.log("Vendors", vendors);
  		})

  	this.route.params
  	.subscribe(parms => {
  		let id = parms["id"];
  		this.getProductById(id);
  	});

}
}