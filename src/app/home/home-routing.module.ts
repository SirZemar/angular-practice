import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accordion',
    component: AccordionComponent,
  },
  {
    path: 'template-variables',
    component: TemplateVariablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
