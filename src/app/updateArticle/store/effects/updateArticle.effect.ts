import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, switchMap, map, tap} from 'rxjs/operators'
import {of} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'

import {ArticleInterface} from '../../../shared/types/article.interface'
import {UpdateArticleService} from '../../services/updateArticle.service'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../actions/updateArticle.action'

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleInput}) => {
        return this.updateArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article})
          }),

          catchError((errorRespose: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({errors: errorRespose.error.errors})
            )
          })
        )
      })
    )
  )
  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {dispatch: false}
  )
  constructor(
    private actions$: Actions,
    private updateArticleService: UpdateArticleService,
    private router: Router
  ) {}
}
