import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

  projectForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initProjectForm();
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

  createProject(){
  }

  onSubmitProjectForm(){
    console.log(this.projectForm.value);
  }

}
