import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../../shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {select, Store} from '@ngrx/store'
import {AppStateInterface} from '../../../shared/types/appState.interface'

import {updateArticleAction} from '../../store/actions/updateArticle.action'
import {ActivatedRoute} from '@angular/router'
import {getArticleAction} from '../../store/actions/getArticle.action'
import {ArticleInterface} from '../../../shared/types/article.interface'
import {filter, map} from 'rxjs/operators'
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {createArticleAction} from '../../../createArticle/store/actions/createArticle.action'
import {UpdateArticleStateInterface} from '../../types/updateArticleState.interface'

@Component({
  selector: 'mc-update-article',
  templateUrl: 'updateArticle.component.html',
})
export class UpdateArticleComponent implements OnInit {
  /*initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }*/
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  isLoading$: Observable<boolean>
  initialValues$: Observable<ArticleInputInterface>
  slug: string
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}
  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
