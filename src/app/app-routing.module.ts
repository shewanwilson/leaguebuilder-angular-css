import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashMenuComponent } from './splash-menu/splash-menu.component';
import { CreateLeagueFormComponent } from './create-league-form/create-league-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'splash-menu' },
  { path: 'splash-menu', component: SplashMenuComponent },
  { path: 'create-league-form', component: CreateLeagueFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
