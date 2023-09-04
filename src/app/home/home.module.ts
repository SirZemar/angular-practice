import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';


@NgModule({
  declarations: [
    HomeComponent,
    AccordionComponent,
    TemplateVariablesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
