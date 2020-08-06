import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './authentication/signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: SigninComponent },
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: '*',redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
