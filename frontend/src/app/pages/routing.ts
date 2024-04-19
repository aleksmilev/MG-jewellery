import { Routes } from '@angular/router';
import { ContactsComponent } from './store/store_info/contacts/contacts.component';
import { DefaultStoreInfoComponent } from './store/store_info/default-store-info/default-store-info.component';
import { StoreLocationComponent } from './store/store-location/store-location.component';
import { ForgottenPasswordComponent } from '../auth/components/forgotten-password/forgotten-password.component';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import { RegisterFormComponent } from '../auth/components/register-form/register-form.component';
import { NotLoginGuard } from '../auth/guards/not-login.guard';
import { TesttdComponent } from '../testtd/testtd.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CustomProductListComponent } from './products/custom-product-list/custom-product-list.component';
import { SingleCustomProductComponent } from './products/single-custom-product/single-custom-product.component';
import { LikedProductsComponent } from './profile/client/liked-products/liked-products.component';
import { LoginGuard } from '../auth/guards/login.guard';
import { ClientGuard } from '../auth/guards/client.guard';
import { OrderComponent } from './profile/client/order/order.component';
import { ClientProfileComponent } from './profile/client/client-profile/client-profile.component';
import { UserProfileComponent } from './profile/user/user-profile.component';
import { UserGuard } from '../auth/guards/user.guard';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './home/dashbord/dashboard.component';

const Routing: Routes = [
	{
		path: 'test',
		component: TesttdComponent,
	},

	// Home
	// 		- Title
	// 		- For Him/ For Her
	// 		- Categories ?
	//		- Trends now
	// 		- Custom Made Products
	// 		- Recomended (grid 4) 8
	// Dashboard
	// 		- Datapanels
	// 			- sales today
	// 			- profit today BGN
	// 			- unsend orders (link to profile-user-editor-unsend_orders)
	// 			- feedbacks (link to dashbord-feedbacks)
	// 		- Sales chart
	// 		- Best selling items 8
	//      - Feedback scrollable table

	// Product list
	//		- (233) products | Filters (Price | For Him/For Her...)
	// 		- Grid 4 of products
	// 		- Page
	// Single product
	// 		- 3D module | Name; Price; Short descripton; Add to card(save as custom item); Like product
	// 		- Grid 2 of image | short descripton <=>
	// 		- Recomended (grid 4) 8
	// Custom product list
	//		- (233) products | Sort by
	// 		- Grid 4 of products
	// 		- Page
	// Single custom product
	// 		- 3D module | Name; Price; Options; Add to card
	// 		- Recomended (grid 4) 8

	// Profile - client
	// 		- Personal info
	//  	- My address
	// 		- My orders
	//  	- Log out
	// Liked products
	// Order 3 stage
	// 		- Stage 1: comfirm products
	// 		- Stage 2: comfirm personal info and address
	// 		- Stage 3: finished order with data
	// Profile - user
	// 	* editor
	//  	-| View all products
	// 		-| Edit and remove product 
	// 		- Add new product
	//  	-| View all categories
	// 		-| Edit and remove category 
	// 		- Add new category
	// 		-| View all custom products
	// 		-| Edit and remove custom product
	// 		- Add new custom product
	// 		-| View all store locations  
	// 		-| Edit and remove store location  
	// 		- Add new store location
	// 		-| View all store info  
	// 		-| Edit and remove store info  
	// 		- Add new store info
	// 	* admin
	// 		-| View all users
	// 		-| Edit and remove user
	// 		- Add new user
	// 		- View all client profiles

	// Home
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [LoginGuard, UserGuard]
	},

	// Product list
	{
		path: 'products/:page_number/:filters',
		component: ProductListComponent
	},
	// Single product
	{
		path: 'product/:id',
		component: SingleProductComponent
	},
	// Custom product list
	{
		path: 'products/custom/:page_number/:filters',
		component: CustomProductListComponent
	},
	// Single custom product
	{
		path: 'product/custom/:id',
		component: SingleCustomProductComponent
	},

	// Log in
	{
		path: 'auth',
		redirectTo: 'auth/login' 
	},
	{
		path: 'auth/login',
		component: LoginFormComponent,
		canActivate: [NotLoginGuard]
	},
	// Register
	{
		path: 'auth/register',
		component: RegisterFormComponent,
		canActivate: [NotLoginGuard]
	},
	// Forgotten password
	{
		path: 'auth/forgotten-password',
		component: ForgottenPasswordComponent,
		canActivate: [NotLoginGuard]
	},
	{
		path: 'auth/**',
		redirectTo: '/auth'
	},

	// Liked products
	{
		path: 'profile/liked',
		component: LikedProductsComponent,
		canActivate: [LoginGuard]
	},
	// Order
	{
		path: 'profile/order',
		component: OrderComponent,
		canActivate: [LoginGuard]
	},
	// Profile (client)
	{
		path: 'profile/info/:tab',
		component: ClientProfileComponent,
		canActivate: [LoginGuard, ClientGuard]
	},
	// Profile (user)
	{
		path: 'profile/user/:tab',
		component: UserProfileComponent,
		canActivate: [LoginGuard, UserGuard]
	}, 

	// Store info
	{
		path: 'store/info/contacts',
		component: ContactsComponent
	},
	{
		path: 'store/info/:tab',
		component: DefaultStoreInfoComponent
	},
	// Store location
	{
		path: 'store/location',
		component: StoreLocationComponent
	},

	// Reset
	{
		path: '**',
		redirectTo: '',
	}
];

const all_routes = [
	// Home
	{
		path: '',
		// component:
	},
	// Dashboard (user)
	{
		path: 'dashbord',
		// component:
		// canActivate: []
	},

	// Store info
	{
		path: 'store/info/:tab',
		// component:
	},
	// Store location
	{
		path: 'store/location/:tab',
		// component:
	},

	// Product list
	{
		path: 'products/:page_number',
		// component:
	},
	// Single product
	{
		path: 'product/:id',
		// component:
	},
	// Custom product list
	{
		path: 'custom_products/:page_number',
		// component:
	},
	// Single custom product
	{
		path: 'custom_product/:id',
		// component:
	},

	// Log in (not_loged_in)
	{
		path: 'auth/login',
		// component:
		// canActivate: []
	},
	// Register (not_loged_in)
	{
		path: 'auth/register',
		// component:
		// canActivate: []
	},
	// Forgotten password (not_loged_in)
	{
		path: 'auth/forgotten_password',
		// component:
		// canActivate: []
	},

	// Profile (client)
	{
		path: 'profile/info/:tab'
		// component:
		// canActivate: []
	},
	// Liked products
	{
		path: 'profile/liked'
		// component:
		// canActivate: []
	},
	// Order (loged_in)
	{
		path: 'profile/order',
		// component:
		// canActivate: []
	},
	{
		path: 'profile/order/:id',
		// component:
		// canActivate: []
	}, 
	// Profile (user)
	{
		path: 'profile/admin/:tab',
		// component:
		// canActivate: []
	}, 

	// Reset
	{
		path: '**',
		redirectTo: '',
	}
]

export { Routing };



