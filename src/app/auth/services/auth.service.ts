import {Injectable} from '@angular/core'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map} from 'rxjs/operators'
import {LoginRequestInterface} from '../types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + 'users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + 'users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.baseApiUrl + 'user'
    return this.http.get(url).pipe(map(this.getUser))
  }
}
