import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittingComponent } from '../models/submitting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { LoadingComponent } from '../models/loading.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  declarations: [
    SubmittingComponent,
    LoadingComponent
  ],
  exports: [
    SubmittingComponent,
    ReactiveFormsModule,
    SharedRoutingModule,
    LoadingComponent
  ]
})
export class SharedModule { }
