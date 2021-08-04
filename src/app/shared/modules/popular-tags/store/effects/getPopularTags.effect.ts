import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, switchMap, map} from 'rxjs/operators'
import {of} from 'rxjs'
import {PopularTagsService} from '../../services/popular-tags.service'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/getPopularTags.action'
import {GetPopularTagsResponseInterface} from '../../types/getPopularTagsResponse.interface'
import {PopularTagType} from '../../../../types/popularTag.type'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopuplarTags().pipe(
          map((tags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({tags})
          }),

          catchError(() => {
            return of(getPopularTagsFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
