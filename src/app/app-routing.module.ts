import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonstermenuComponent } from './components/monstermenu/monstermenu.component';


const routes: Routes = [
  {path: "/monster/*"}
  {path: "**", component: MonstermenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
