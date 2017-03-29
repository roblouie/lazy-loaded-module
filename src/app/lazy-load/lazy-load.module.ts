import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './lazy-load.routing';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';
import { SingletonService } from './singleton-service.service';

@NgModule({
  imports: [
    AboutRoutingModule,
  ],
  exports: [],
  declarations: [PageOneComponent, PageTwoComponent],
  providers: [SingletonService],
})
export class LazyLoadModule { }
