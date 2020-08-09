import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: SigninComponent },
  { path: 'education', component: EducationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: '*',redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
