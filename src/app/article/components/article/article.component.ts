import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {select, Store} from '@ngrx/store'

import {ActivatedRoute, Params, Router} from '@angular/router'
import {parseUrl, stringify} from 'query-string'
import {AppStateInterface} from '../../../shared/types/appState.interface'
import {getArticleAction} from '../../store/actions/getArticle.action'
import {Observable} from 'rxjs'
import {ArticleInterface} from '../../../shared/types/article.interface'

import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {currentUserSelector} from '../../../auth/store/selectors'
import {combineLatest} from 'rxjs'
import {map} from 'rxjs/operators'
import {deleteArticleAction} from '../../store/actions/deleteArticle.action'

@Component({
  selector: 'mc-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss'],
})
export class ArticleComponent implements OnInit {
  slug: string
  article$: Observable<ArticleInterface | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>
  currentUser: Observable<CurrentUserInterface | null>
  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.article$ = this.store.pipe(select(articleSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.currentUser = this.store.pipe(select(currentUserSelector))
    this.isAuthor$ = combineLatest([this.article$, this.currentUser]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return currentUser.username === article.author.username
        }
      )
    )
  }
  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
