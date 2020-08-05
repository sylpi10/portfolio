import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsSubject = new Subject<any[]>();

  constructor() { }

  emitProjects() {
    this.projectsSubject.next(this.projects);
  }

  projects = [
    {
      title: 'L\'atelier Chenoa',
      date: '2020',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid odit numquam provident accusamus voluptate quidem minima ea iste ad. Quos aperiam in ad commodi nisi totam at, consectetur voluptatibus.',
      stack: ['python', 'django', 'fedora', 'git'],
      pic: 'ims/pic/image.jpg'
    },
    {
      title: 'Mountain Guide',
      date: '2020',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid odit numquam provident accusamus voluptate quidem minima ea iste ad. Quos aperiam in ad commodi nisi totam at, consectetur voluptatibus.',
      stack: ['java', 'spring boot', 'hibernate', 'git'],
      pic: 'ims/pic/image.jpg'
    },

  ]

    getProjects(){
      // return new Promise(
      //   (resolve, reject) => {
      //   if (this.projects && this.projects.length > 0) {
      //     resolve(this.projects);
      //   }else{
      //     const error = new Error('project doesnt exist or empty')
      //     reject(error);
      //   }
      // });


      return new Observable(
        (observer)=> {
           if (this.projects && this.projects.length > 0) {
             observer.next(this.projects);
             observer.complete();
           } else {
            const error = new Error('project doesnt exist or empty');
            observer.error(error);
           }
        }
      )

    }

}
