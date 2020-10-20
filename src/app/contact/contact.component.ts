import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import * as firebase from 'firebase';
import { Message } from 'src/app/interfaces/message';
import {Email} from 'src/assets/smtp.js'; 
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: FormGroup;
  name: string;
  email: string;
  message: string;
  messages: Message[] = [];
  success: string = '';
  isSent: boolean = false;
  emailSender: Email;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {

    // get messages not to delete former one on submit
    this.contactService.messageSubject.subscribe(
      (data: Message[])=> {
        this.messages = data;
      }
      );
      this.contactService.getMessages();
      this.contactService.emitMessage();

    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])})
    }

    // onSubmit(formData) {
    //   console.log(formData)
    //   this.contactService.PostMessage(formData)
    //   .subscribe(response => {
    //   location.href = 'https://mailthis.to/confirm'
    //   console.log(response)
    //   }, error => {
    //   console.warn(error.responseText)
    //   console.log({ error })
    //   })

    // }

    // sendMail(formData){
    //   // this.formData.value;
    //   const newMessage: Message = this.formData.value;
    //   newMessage.name = this.formData.get('name').value;  
    //   newMessage.email = this.formData.get('email').value;  
    //   newMessage.message = this.formData.get('message').value;  
    //   this.contactService.createMessage(newMessage);
    //   this.isSent = true;
    //   this.formData.reset();
    //   console.log(formData)
    // }

    sendMail(formData){
      this.contactService.contactRegister(this.formData.value);
      this.isSent = true;

      Email.send({
        Host : 'smtp.live.com',
        Username : 'syl.pillet@hotmail.fr',
        Password : 'soycdwywh.10',
        To : 'syl.pillet@hotmail.fr',
        From : `${formData.get('email')}`,
        Subject : 'mail from portfolio',
        Body : `${formData.get('message')}`
        });

        this.formData.reset();
        if (this.isSent) {
          setTimeout(()=>{
            this.isSent = false;
          }, 4000);
        }
        console.log(formData);
      }
}
