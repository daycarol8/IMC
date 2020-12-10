import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Login(){
    this.authService.SignIn(this.formulario.get('email').value, this.formulario.get('password').value)
    .then(async (res) => {
      this.router.navigate(['home']);
      const toast = await this.toastController.create({
        message: 'Login bem sucedido',
        duration: 5000
      });
      toast.present();
    }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: error.message,
        duration: 5000
      });
      toast.present();
    });
  }

  GoToRegister(){
    this.router.navigate(['register']);
  }
}
