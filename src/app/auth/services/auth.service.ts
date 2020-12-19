import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax, AjaxResponse} from 'rxjs/ajax';
import { StorageService } from 'src/app/core/services/stogare.service';
import { Credential } from '../models/credantial';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private storage: StorageService) {}
  
  login(credantials: Credential): Observable<AjaxResponse>  {
    return ajax({
      url: 'https://reqres.in/api/login',
      method: 'POST',
      body: {
        email: credantials.email,
        password: credantials.password
      }
    })
  }

  loggedIn(): Observable<boolean> {
    return of(this.storage.hasItem('access-token'));
  }
}
