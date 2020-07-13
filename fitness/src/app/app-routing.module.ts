import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { MealComponent } from './meal/meal.component';
import { PaidSignupComponent } from './paid-signup/paid-signup.component';
import { ProfileComponent } from './profile/profile.component';
import { TrackComponent } from './track/track.component';
import{BlogComponent} from './blog/blog.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import { FitnessComponent } from './fitness/fitness.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [

    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'signup',
      component : SignupComponent

    },
    {
      path : 'home',
      component : HomeComponent

    },
    {
      path : 'index',
      component : IndexComponent

    },
    {
      path : 'meal',
      component : MealComponent

    },
    {
      path : 'signupPaid',
      component : PaidSignupComponent
    },
    {
      path : 'profile',
      component : ProfileComponent 
    },
    {
      path : 'track/:id',
      component : TrackComponent
    },
  {
    path:'blog',
    component:BlogComponent

  },
 {
   path:'aboutus',
   component:AboutusComponent
 },
 {
   path:'fitness',
   component:FitnessComponent
 },
 {
   path:'nutrition',
   component:NutritionComponent
 },
 {
   path:'yoga',
   component:YogaComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }