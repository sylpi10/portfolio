import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService
  ) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])})
    }

    onSubmit(FormData) {
      console.log(FormData)
      this.contact.PostMessage(FormData)
      .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
      }, error => {
      console.warn(error.responseText)
      console.log({ error })
      })
    }
}
