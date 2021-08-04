import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'
import {ArticleInterface} from '../../shared/types/article.interface'
import {Observable} from 'rxjs'
import {environment} from '../../../environments/environment'
import {map} from 'rxjs/operators'
import {SaveArticleResponseInterface} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class UpdateArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const url: string = `${environment.baseApiUrl}articles/${slug}`
    return this.http.put<SaveArticleResponseInterface>(url, articleInput).pipe(
      map((response: SaveArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
