import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './product/list/list.component';
import { DateComponent } from './date/date.component';
import { CreateComponent } from './product/create/create.component';

import { EditComponent } from './product/edit/edit.component';
import { DeleteComponent } from './product/delete/delete.component';
import {ProductService} from "./service/product.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DateComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
