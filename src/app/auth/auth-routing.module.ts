import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const authRoutes: Routes = [
    {path: "signup", component: SignupComponent},
    {path: "signin", component: SigninComponent},
    {path: "signup/:anything", redirectTo: "signup"},
    {path: "signin/:anything", redirectTo: "signin"}
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}