import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'subpage', component: PageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule { }


