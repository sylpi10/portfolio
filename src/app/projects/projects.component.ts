import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../services/header.service';
import { LOCALE_ID, Inject } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: any[] = [];
  projectSubcription: Subscription;
  isHome: any;
  currentLang:string = 'fr';

  constructor(
    private projectService: ProjectsService,
    private translateService: TranslateService,
    private headerService: HeaderService,
    private homeService: HomeService,
    private router: Router,
    @Inject(LOCALE_ID) public locale: string
  ) { 
  }

  ngOnInit(): any {

  this.projectSubcription = this.projectService.projectsSubject.subscribe(
      (data: any) => {
         this.projects = data; 
      }
    );
    this.projectService.getProjects();
    this.projectService.emitProjects();
  
    // get the langue from header service
    this.headerService.currentLangue.subscribe(
      lang => this.currentLang = lang)
    
  }

  ngOnDestroy(): void {
    this.projectSubcription.unsubscribe();
  }

}
