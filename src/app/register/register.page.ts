import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthenticationService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  signUp(){
    this.authService.RegisterUser(this.formulario.get('email').value, this.formulario.get('password').value)
    .then((res) => {
      this.router.navigate(['tabs/tab1']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
}
