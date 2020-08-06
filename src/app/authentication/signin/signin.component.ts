import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initSigninForm();
  }

  initSigninForm(){
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmitSigninForm(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    // this.authenticationService.signupUser(email, password).then(
    //   () => {
    //     console.log('ok');
    //   }
    // ).catch(
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.authenticationService.signinUser(email, password).then(
      (data) => {
        this.router.navigate(['/admin', 'dashboard']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
