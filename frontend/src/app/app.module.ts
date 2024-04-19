import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RecommendedComponent } from './pages/global_components/recommended/recommended.component';
import { ProductSizesComponent } from './pages/global_components/product-sizes/product-sizes.component';

import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { ForgottenPasswordComponent } from './auth/components/forgotten-password/forgotten-password.component';

import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/home/dashbord/dashboard.component';
import { DashboardDatapanelsComponent } from './pages/home/dashbord/components/dashboard-datapanels/dashboard-datapanels.component';
import { DashboardSalesChartComponent } from './pages/home/dashbord/components/dashboard-sales-chart/dashboard-sales-chart.component';

import { ContactsComponent } from './pages/store/store_info/contacts/contacts.component';
import { DefaultStoreInfoComponent } from './pages/store/store_info/default-store-info/default-store-info.component';
import { StoreLocationComponent } from './pages/store/store-location/store-location.component';

import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';
import { CustomProductListComponent } from './pages/products/custom-product-list/custom-product-list.component';
import { SingleCustomProductComponent } from './pages/products/single-custom-product/single-custom-product.component';
import { CustomModuleComponent } from './pages/products/single-custom-product/custom-module/custom-module.component';
import { CustomPartComponent } from './pages/products/single-custom-product/custom-part/custom-part.component';

import { LikedProductsComponent } from './pages/profile/client/liked-products/liked-products.component';
import { OrderComponent } from './pages/profile/client/order/order.component';
import { ConfirmProductsComponent } from './pages/profile/client/order/components/confirm-products/confirm-products.component';
import { ConfirmInfoComponent } from './pages/profile/client/order/components/confirm-info/confirm-info.component';
import { FinishedOrderComponent } from './pages/profile/client/order/components/finished-order/finished-order.component';
import { ClientProfileComponent } from './pages/profile/client/client-profile/client-profile.component';
import { ClientPersonalInfoComponent } from './pages/profile/client/client-profile/components/client-personal-info/client-personal-info.component';
import { ClientAddressComponent } from './pages/profile/client/client-profile/components/client-address/client-address.component';
import { ClientOrdersComponent } from './pages/profile/client/client-profile/components/client-orders/client-orders.component';

import { UserProfileComponent } from './pages/profile/user/user-profile.component';
import { UserEditorComponent } from './pages/profile/user/user-editor/user-editor.component';
import { UserAdminComponent } from './pages/profile/user/user-admin/user-admin.component';
import { UserPersonalInfoComponent } from './pages/profile/user/user-personal-info/user-personal-info.component';
import { NewUserComponent } from './pages/profile/user/user-admin/components/new-user/new-user.component';
import { ViewUsersComponent } from './pages/profile/user/user-admin/components/view-users/view-users.component';
import { EditorNewStoreInfoComponent } from './pages/profile/user/user-editor/components/editor-new-store-info/editor-new-store-info.component';
import { EditorViewStoreInfoComponent } from './pages/profile/user/user-editor/components/editor-view-store-info/editor-view-store-info.component';

import { TesttdComponent } from './testtd/testtd.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
	declarations: [
		AppComponent,
		RecommendedComponent,
		ContactsComponent,
		DefaultStoreInfoComponent,
		StoreLocationComponent,
		LoginFormComponent,
		RegisterFormComponent,
		ForgottenPasswordComponent,
		ProductListComponent,
		SingleProductComponent,
		CustomProductListComponent,
		SingleCustomProductComponent,
		CustomModuleComponent,
		LikedProductsComponent,
		OrderComponent,
		ConfirmProductsComponent,
		ConfirmInfoComponent,
		FinishedOrderComponent,
		ClientProfileComponent,
		ClientPersonalInfoComponent,
		ClientAddressComponent,
		ClientOrdersComponent,
		UserProfileComponent,
		UserEditorComponent,
		UserAdminComponent,
		UserPersonalInfoComponent,
		NewUserComponent,
		ViewUsersComponent,
		EditorNewStoreInfoComponent,
		EditorViewStoreInfoComponent,
		HomeComponent,
		DashboardComponent,
		ProductSizesComponent,
		CustomPartComponent,
		DashboardDatapanelsComponent,
		DashboardSalesChartComponent,

		TesttdComponent // for 3d testing
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		NgSelectModule,
  		NgbModule,
		NgApexchartsModule,
	],
	providers: [],
	exports: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
