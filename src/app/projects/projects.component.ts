import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: any[] = [];
  projectSubcription: Subscription;

  constructor(
    private projectService: ProjectsService
  ) { }


  ngOnInit(): void {
  this.projectSubcription = this.projectService.projectsSubject.subscribe(
      (data: any) => {
         this.projects = data; 
      }
    );
    this.projectService.getProjects();
    this.projectService.emitProjects();
  }

  ngOnDestroy(): void {
    this.projectSubcription.unsubscribe();
  }

}
