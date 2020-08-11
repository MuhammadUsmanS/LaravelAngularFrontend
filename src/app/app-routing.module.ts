
import { NgModule } from '@angular/core';// import { CommonModule } from '@angular/common';
/////////////////////////////////////////////////////////////////
import { Routes , RouterModule} from  '@angular/router' ; 

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';


	const appRoutes: Routes = [

	 { path: 'login',   component: LoginComponent ,  canActivate: [BeforeLoginService] },
	 { path: 'signup',  component: SignupComponent,  canActivate: [BeforeLoginService]},
	 { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },

	 { path: 'request-reset-password', component: RequestResetComponent },
	 { path: 'response-reset-password',component: ResponseResetComponent },


	];


@NgModule({
								 
 	imports: [ RouterModule.forRoot(appRoutes) ], 
 	exports: [ RouterModule ]
})
export class AppRoutingModule { }