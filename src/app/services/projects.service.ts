import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import * as firebase from 'firebase';
import { HeaderService } from './header.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[]= [];
  projectsSubject = new Subject<Project[]>();

  constructor(
    private headerService: HeaderService,
    private translateService: TranslateService
    ) { }

  emitProjects() {
    this.projectsSubject.next(this.projects);
  }

    saveProject(){
      firebase.database().ref('/projects').set(this.projects);
    }

    getProjects(){
      firebase.database().ref('/projects').on('value', (data) => {
        this.projects = data.val() ? data.val() : [];
        this.emitProjects();
      });
    }

    createProject(project: Project){
      this.projects.push(project);
      this.saveProject();
      this.emitProjects();
    }
    
    updateProject(project: Project, index){
      // ===> older method 
      // this.projects[index] = project;
      // this.saveProject();
      // this.emitProjects();
      // ===>firebase method 
      firebase.database().ref('/projects/' + index).update(project).catch(
        (error) => {
          console.error(error);
        }
      );

    }

    deleteProject(index){
      this.projects.splice(index, 1);
      this.saveProject();
      this.emitProjects();
    }

    uploadFile(file: File){
      return new Promise(
        (resolve, reject) => {
          const uniqId = Date.now().toString();
          const fileName = uniqId + file.name;
          const upload = firebase.storage().ref().child('images/projects/' + uniqId + fileName).put(file);
          upload.on(firebase.storage.TaskEvent.STATE_CHANGED, 
            () => {
              console.log('loading...');
            },
              (error) => {
                console.error(error);
                reject(error);
              },
              () => {
                upload.snapshot.ref.getDownloadURL().then(
                  (downloadUrl) => {
                    resolve(downloadUrl);
                  }
                )  
              }  
            );
        }
      );
    }

    removeFile(fileLink: string){
      if (fileLink) {
        const storageRef = firebase.storage().refFromURL(fileLink);
        storageRef.delete().then(
          () => {
            console.log("file deleted");
          }
        ).catch(
          (error) => {
            console.error(error);
          }
        )
      }
    }

}
