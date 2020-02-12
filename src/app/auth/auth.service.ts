import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ) { }

    getUserState() {
      return this.afAuth.authState;
    }

    login( email: string, password: string ) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => { this.eventAuthError.next(error); } )
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/']);
        }
      });
    }

    createUser(user) {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(
        userCredential => {
          this.newUser = user;
          userCredential.user.updateProfile({
            displayName: user.firstName + ' ' + user.lastName
          });

          this.addUserData(userCredential).then(
            () => {
              this.router.navigate(['/']);
            }
          );
        }
        )
        .catch(err => {
          console.log(err);
          this.eventAuthError.next(err);
        } );
      }

      addUserData( userCredential: firebase.auth.UserCredential ) {
        return this.db.collection('Users').doc(`${userCredential.user.uid}`).set({
          email: this.newUser.email,
          firstname: this.newUser.firstName,
          lastname: this.newUser.lastName,
          category: 'user'
        });
      }

      logout() {
        return this.afAuth.auth.signOut();
      }
}



