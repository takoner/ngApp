import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { newUser } from '../newuser/newuser.component';

const routes: Routes = [
  { path: '', redirectTo: 'newuser', pathMatch: 'full' },
  { path: 'newuser', component: newUser },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
