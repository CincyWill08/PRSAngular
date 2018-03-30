import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {UserService} from './services/user.service';
import {VendorService} from './services/vendor.service';
import {ProductService} from './services/product.service';
import {PurchaseRequestService} from './services/purchase-request.service';
import {PurchaseRequestLineItemService} from './services/purchase-request-line-item.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
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
import { PurchaseRequestLineItemListComponent } from './purchase-request-line-item/purchase-request-line-item-list/purchase-request-line-item-list.component';
import { PurchaseRequestLineItemDetailComponent } from './purchase-request-line-item/purchase-request-line-item-detail/purchase-request-line-item-detail.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-item/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-item/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestReviewItemComponent } from './purchase-request/purchase-request-review-item/purchase-request-review-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestLineItemListComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestReviewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService, VendorService, ProductService, PurchaseRequestService,
    PurchaseRequestLineItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
