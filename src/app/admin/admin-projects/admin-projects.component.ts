import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

  projectForm: FormGroup;
  projectSubscription: Subscription;
  projects: any[] = [];
  indexToDelete;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.initProjectForm();
    this.projectService.projectsSubject.subscribe(
      (data)=> {
        console.log(data);
        this.projects = data;
      }
    );
    this.projectService.emitProjects();
  }

  initProjectForm() {
    this.projectForm = this.formBuilder.group({
      'projectName': ['',Validators.required],
      'projectDate': '',
      'description': '',
      'techno1': '',
      'webLink': '',
      'githubLink': '',
      'mockUp': ''
    })
  }

  onSubmitProjectForm(){
    const newProject = this.projectForm.value;
    this.projectService.createProject(newProject);
    $('#formAddProject').modal('hide');
    $(".modal-backdrop").remove();
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
    $(".modal-backdrop").remove();
  }

  resetForm(){
    this.projectForm.reset();
  }

}
