import { Router } from '@angular/router';
import { keys } from './../../shared/TS Files/localstorage-key';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { userInfo } from '../../shared/TS Files/userInfo';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // apiUrl = environment?.apiUrl;
  isUserLogin = new BehaviorSubject<boolean>(false);
  isLogged = new BehaviorSubject<boolean>(false);
  isLoggedSocial = new BehaviorSubject<boolean>(false);

  xdashLogged;
  data: any = userInfo;
  // isLogin: any;

  constructor(
    private http: HttpClient,
    private route: Router,
    private SocialService: SocialAuthService) {
    if (window.localStorage.getItem(keys.logged)) {
      this.xdashLogged = window.localStorage.getItem(keys.logged);
    } else {
      this.xdashLogged = false
    }
  }

  // register(user: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl + "/register", user);
  // }

  // getProfile(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + "/profile");
  // }

  login(email: any, password: any): any {
    this.isUserLogin.next(true);
    if (this.data.email == email && this.data.password == password) {
      this.xdashLogged = true;
      window.localStorage.setItem(keys.logged, 'true');
      window.localStorage.setItem(keys.userData, JSON.stringify(this.data));
      this.isLogged.next(true);
      return {
        status: true,
        data: this.data
      };
    }
    return {
      status: false
    };

  }

  signInWithGoogle(): void {
    this.isUserLogin.next(true);
    this.SocialService?.signIn(GoogleLoginProvider?.PROVIDER_ID)
      .then((res) => {
        let data = {
          email: res?.email,
          social_id: res?.id,
          name: res?.name,
          photo: res?.photoUrl,
        };
        if (data.social_id) {
          window.localStorage.setItem(keys.logged, 'true');
          window.localStorage.setItem(keys.userData, JSON.stringify(data));
        }
        setTimeout(() => {
          this.isLogged.next(true);
          this.isLoggedSocial.next(true);
          this.isUserLogin.next(false);
          this.route.navigate(['/layout']);
        }, 1000);
      })
      .catch((error) => {
        if (error?.message) {
          console.log(error);
        }
      });
  }

  signOut(): void {
    setTimeout(() => {
      window.localStorage.removeItem(keys.logged);
      window.localStorage.removeItem(keys.userData);
      this.isUserLogin.next(false);
      this.isLogged.next(false);
      this.isLoggedSocial.subscribe((res: any) => {
        if (res) {
          this.SocialService.signOut();
          this.isLoggedSocial.next(false);
        }
      });
      this.route.navigate(['/auth']);
    }, 1000);
  }
}



