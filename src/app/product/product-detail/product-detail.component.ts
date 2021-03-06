import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	pagetitle: string = "Product Detail";
	product: Product;
  isHidden: boolean = true;

  constructor(private ProductSvc: ProductService,
    private router: Router, 
  	private route: ActivatedRoute
    ) { }


 verify(): void {
    this.isHidden = false;
  }

  remove(): void {
    this.ProductSvc.Remove(this.product)
      .subscribe(res => {
          console.log(res);
          this.router.navigateByUrl("/products/list");
      });
    
  }

  getProductById(id){
  	this.ProductSvc.Get(id)
  	.subscribe(product => {
  		this.product = product;
  		console.log("Product:", product);
  	});
  }

  ngOnInit() {
  	this.route.params
  	.subscribe(parms => {
  		let id = parms["id"];
  		this.getProductById(id);
  	});

  }

}
