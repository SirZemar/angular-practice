import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentModule } from '../common/components/header/header.component';


@NgModule({
  declarations: [HomeComponent, AccordionComponent, TemplateVariablesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    HeaderComponentModule,
  ],
})
export class HomeModule {}
