import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFire: AngularFireAuth) { }

  RegisterUser(email: string, password: string) {
    return this.angularFire.createUserWithEmailAndPassword(email, password);
  }

  SignIn(email: string, password: string) {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }
  
}
