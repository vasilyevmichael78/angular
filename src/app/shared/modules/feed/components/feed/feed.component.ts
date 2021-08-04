import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {AppStateInterface} from '../../../../types/appState.interface'
import {getFeedAction} from '../../store/actions/getFeed.action'
import {Observable, Subscription} from 'rxjs'
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface'
import {map} from 'rxjs/operators'
import {
  dataSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {environment} from '../../../../../../environments/environment'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {parseUrl, stringify} from 'query-string'

@Component({
  selector: 'mc-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
  inputs: ['apiUrl'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  baseUrl: string
  limit: number = environment.limit
  apiUrl: string //@Input for YourFeedComponent and GlobalFeedComponent
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  currentPage: number
  queryParamsSubscription: Subscription

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const isApiUrlChanged =
      !changes.apiUrl.firstChange &&
      changes.apiUrl.currentValue !== changes.apiUrl.previousValue
    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
  ngOnInit(): void {
    this.initializeValues()

    this.initializeListeners()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(dataSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        console.log(params)
        this.currentPage = Number(params.page || '1')
        this.fetchFeed()
      }
    )
  }
  fetchFeed() {
    const offset: number = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrl)

    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }
}
