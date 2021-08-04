import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {GetArticleResponseInterface} from '../types/getArticleResponse.interface'
import {ArticleInterface} from '../types/article.interface'
import {map} from 'rxjs/operators'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.baseApiUrl}articles/${slug}`
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
