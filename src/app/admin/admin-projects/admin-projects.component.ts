import { Component, OnInit, Pipe } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

  projectForm: FormGroup;
  projectSubscription: Subscription;
  projects: Project[] = [];
  indexToDelete;
  indexToUpdate;
  editMode: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.initProjectForm();
    this.projectService.projectsSubject.subscribe(
      (data: Project[])=> {
        console.log(data);
        this.projects = data;
      }
    );
    this.projectService.getProjects();
    this.projectService.emitProjects();
  }

  initProjectForm() {
    this.projectForm = this.formBuilder.group({
      'projectName': ['',Validators.required],
      'projectDate': '',
      'subtitle': '',
      'englishSubtitle': '',
      'description': '',
      'englishDescription': '',
      'techno': '',
      'webLink': '',
      'githubLink': '',
      'mockUp': ''
    })
  }

  onSubmitProjectForm(){
    this.projectForm.value;
    const newProject: Project = this.projectForm.value;
    newProject.subtitle = this.projectForm.get('subtitle').value ? this.projectForm.get('subtitle').value : '';
    newProject.englishSubtitle = this.projectForm.get('englishSubtitle').value ? this.projectForm.get('englishSubtitle').value : '';
    newProject.webLink = this.projectForm.get('webLink').value ? this.projectForm.get('webLink').value : '';
    newProject.githubLink = this.projectForm.get('githubLink').value ? this.projectForm.get('githubLink').value : '';
    newProject.mockUp = this.projectForm.get('mockUp').value ? this.projectForm.get('mockUp').value : '';
    
    if (this.editMode) {
      this.projectService.updateProject(newProject, this.indexToUpdate);
    }else{
      this.projectService.createProject(newProject);
    }
    $('#formAddProject').modal('hide');
    // $(".modal-backdrop").remove();
  }

  resetForm(){
    this.editMode = false;
    this.projectForm.reset();
  }

  onDeleteProject(index){
    // if (confirm("are tou sure dude ??")) {
      //   this.projectService.deleteProject(index);
      // }
      this.indexToDelete = index;   
      console.log(this.projects[index]);
    }
    
    onConfirmDeleteProject(){
      this.projectService.deleteProject(this.indexToDelete);
      $("#confirmDeletion").modal('hide');
      // $(".modal-backdrop").remove();
    }
    
    onEditProject(project: Project){
      this.editMode = true;
      $('#formAddProject').modal('show');
      this.projectForm.get('projectName').setValue(project.projectName);
      this.projectForm.get('projectDate').setValue(project.projectDate);
      this.projectForm.get('description').setValue(project.description);
      this.projectForm.get('techno').setValue(project.techno);
      this.projectForm.get('webLink').setValue(project.webLink);
      this.projectForm.get('githubLink').setValue(project.githubLink);
      this.projectForm.get('mockUp').setValue(project.mockUp);

      const index = this.projects.findIndex(
        (projectEl) => {
          if (projectEl === project) {
            return true;
          }
        }
      );
      this.indexToUpdate = index;
  }


}
