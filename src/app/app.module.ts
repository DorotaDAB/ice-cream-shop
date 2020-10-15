import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { OwnerPanelComponent } from './components/owner/owner-panel/owner-panel.component';
import { CustomerListComponent } from './components/owner/owner-panel/customers/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/owner/owner-panel/customers/customer-details/customer-details.component';
import { CustomerComponent } from './components/owner/owner-panel/customers/customer-list/customer/customer.component';
import { CustomersComponent } from './components/owner/owner-panel/customers/customers.component';
import { OfferComponent } from './components/owner/owner-panel/offer/offer.component';
import { IcecreamListComponent } from './components/owner/owner-panel/offer/icecream-list/icecream-list.component';
import { IcecreamComponent } from './components/owner/owner-panel/offer/icecream-list/icecream/icecream.component';
import { UnitsListComponent } from './components/owner/owner-panel/offer/units-list/units-list.component';
import { UnitComponent } from './components/owner/owner-panel/offer/units-list/unit/unit.component';
import { OrdersComponent } from './components/owner/owner-panel/orders/orders.component';
import { OrderListComponent } from './components/owner/owner-panel/orders/order-list/order-list.component';
import { OrderComponent } from './components/owner/owner-panel/orders/order-list/order/order.component';
import { CustomerPanelComponent } from './components/customer/customer-panel/customer-panel.component';
import {
  CustomerIcecreamListComponent } from './components/customer/customer-panel/customer-icecream-list/customer-icecream-list.component';
import { CustomerIcecreamComponent } from './components/customer/customer-panel/customer-icecream-list/customer-icecream/customer-icecream.component';
import { CustomerOrderListComponent } from './components/customer/customer-panel/customer-order-list/customer-order-list.component';
import { CustomerOrderComponent } from './components/customer/customer-panel/customer-order-list/customer-order/customer-order.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/shared/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    OwnerPanelComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    CustomersComponent,
    OfferComponent,
    IcecreamListComponent,
    IcecreamComponent,
    UnitsListComponent,
    UnitComponent,
    OrdersComponent,
    OrderListComponent,
    OrderComponent,
    CustomerPanelComponent,
    CustomerIcecreamListComponent,
    CustomerIcecreamComponent,
    CustomerOrderListComponent,
    CustomerOrderComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }