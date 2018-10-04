import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {ToastModule} from 'ng6-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from "angular-6-datatable";
import {BreadcrumbsModule} from "ng6-breadcrumbs";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    DataTableModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
