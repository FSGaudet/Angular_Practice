import { NgModule } from '@angular/core';
import { GoodListComponent } from './good-list.component';
import { GoodDetailComponent } from './good-detail.component';
import { RouterModule } from '@angular/router';
import { GoodDetailGuard } from './good-detail.guard';
import { SharedModule } from '../shared/shared.module';
/*
  This is the start of working on module, this was generated using the
  ng g m goods/good --flat -m app

  ng --> Calling the cli
  g --> Generate
  m --> module
  goods/good --> the path and the name
  --flat --> to not create extra directory tree
  -m app --> to add this module to the module (-m) app
*/

@NgModule({
  declarations: [
    GoodListComponent,
    GoodDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'goods', component: GoodListComponent },
      { 
        path: 'goods/:id', 
        canActivate: [GoodDetailGuard],// This is the guard service, you add it the desired path
        component: GoodDetailComponent     
      }
    ]),
    SharedModule
  ]
})
export class GoodModule { }
