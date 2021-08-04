import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../../environments/environment'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  deleteArticle(slug: string): Observable<{}> {
    const url: string = `${environment.baseApiUrl}articles/${slug}`
    return this.http.delete<{}>(url)
  }
}
