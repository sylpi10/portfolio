import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Message } from 'src/app/interfaces/message';
import * as firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})  

export class ContactService {
private api = 'https://mailthis.to/syl.pillet@hotmail.fr'

messages: Message[]= [];
messageSubject = new Subject<Message[]>();

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  emitMessage() {
    this.messageSubject.next(this.messages);
  }

  saveMessage(){
    firebase.database().ref('/messages').set(this.messages);
  }


  getMessages(){
    firebase.database().ref('/messages').on('value', (data) => {
      this.messages = data.val() ? data.val() : [];
      this.emitMessage();
    });
  }


  createMessage(message: Message){
    this.messages.push(message);
    this.saveMessage();
    this.emitMessage();
  }

  // PostMessage(input: any){

  //   return this.http.post(this.api, input, {responseType: 'text'}).pipe(
  //     map(
  //       (response)=> {
  //         if (response) {
  //           return response;
  //         }
  //       },
  //       (error: any)=> {
  //         return error;
  //       }
  //       )
  //     )
  // }

  public contactRegister(formValues: Message): Promise<any> {
    return new Promise<DocumentReference>((resolve, reject) => {
      this.firestore
        .collection('mails')
        .add(formValues)
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  }

}
