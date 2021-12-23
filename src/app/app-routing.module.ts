import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListComponent} from "./product/list/list.component";
import {CreateComponent} from "./product/create/create.component";

import {EditComponent} from "./product/edit/edit.component";
import {DeleteComponent} from "./product/delete/delete.component";


const routes: Routes = [
  {
  path: 'product/list',
  component: ListComponent
}, {
  path: 'product/create',
  component: CreateComponent
}, {
  path: 'product/edit/:id',
  component: EditComponent
}, {
  path: 'product/delete/:id',
  component: DeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
