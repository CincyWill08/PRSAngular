import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanReviewGuard } from './guards/can-review.guard';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestReviewItemComponent } from './purchase-request/purchase-request-review-item/purchase-request-review-item.component';


import { PurchaseRequestLineItemListComponent } from './purchase-request-line-item/purchase-request-line-item-list/purchase-request-line-item-list.component';
import { PurchaseRequestLineItemDetailComponent } from './purchase-request-line-item/purchase-request-line-item-detail/purchase-request-line-item-detail.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-item/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-item/purchase-request-line-item-edit/purchase-request-line-item-edit.component';

import {HomeComponent} from "./support/home/home.component";
import {AboutComponent} from "./support/about/about.component";

const routes: Routes = [
	{path: "", redirectTo: "/home", pathMatch: "full"},
	{path: "users/detail/:id", component: UserDetailComponent},
	{path: "users/edit/:id", component: UserEditComponent},
	{path: "users/list", component: UserListComponent},
	{path: "users/create", component: UserCreateComponent},
	{path: "users/login", component: UserLoginComponent},
	{path: "users/logout", component: UserLogoutComponent},


	{path: "vendors/detail/:id", component: VendorDetailComponent},
	{path: "vendors/edit/:id", component: VendorEditComponent},
	{path: "vendors/list", component: VendorListComponent},
	{path: "vendors/create", component: VendorCreateComponent},

	{path: "products/detail/:id", component: ProductDetailComponent},
	{path: "products/edit/:id", component: ProductEditComponent},
	{path: "products/list", component: ProductListComponent},
	{path: "products/create", component: ProductCreateComponent},

	{path: "purchaserequests/detail/:id", component: PurchaseRequestDetailComponent},
	{path: "purchaserequests/edit/:id", component: PurchaseRequestEditComponent},
	{path: "purchaserequests/list", component: PurchaseRequestListComponent},
	{path: "purchaserequests/create", component: PurchaseRequestCreateComponent},
	{path: "purchaserequests/lines/:id", component: PurchaseRequestLinesComponent},
	{path: "purchaserequests/review", component: PurchaseRequestReviewComponent, canActivate: [CanReviewGuard]},
	{path: "purchaserequests/review-item/:id", component: PurchaseRequestReviewItemComponent},

	{path: "purchaserequestlineitems/detail/:prid/:id", component: PurchaseRequestLineItemDetailComponent},
	{path: "purchaserequestlineitems/edit/:prid/:id", component: PurchaseRequestLineItemEditComponent},
	{path: "purchaserequestlineitems/list", component: PurchaseRequestLineItemListComponent},
	{path: "purchaserequestlineitems/create/:prid", component: PurchaseRequestLineItemCreateComponent},

	{path: "home", component: HomeComponent},
	{path: "about", component: AboutComponent},
	{path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
