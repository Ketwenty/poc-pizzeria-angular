import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainComponent } from './train/train.component';
import { TrainsComponent } from './trains/trains.component';
import { NavComponent } from './nav/nav.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthComponent } from './auth/auth.component';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { PocRxjsComponent } from './poc-rxjs/poc-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzasComponent,
    MainComponent,
    UserComponent,
    TrainComponent,
    TrainsComponent,
    NavComponent,
    NavMenuComponent,
    AuthComponent,
    AuthMenuComponent,
    PocRxjsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
