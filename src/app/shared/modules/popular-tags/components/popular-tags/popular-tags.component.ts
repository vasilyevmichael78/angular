import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {AppStateInterface} from '../../../../types/appState.interface'
import {getPopularTagsAction} from '../../store/actions/getPopularTags.action'
import {Observable, Subscription} from 'rxjs'

import {
  dataSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {PopularTagType} from '../../../../types/popularTag.type'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: 'popular-tags.component.html',
  styleUrls: ['popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  loading$: Observable<boolean>
  error$: Observable<string | null>
  tags$: Observable<PopularTagType[] | null>

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchPopularTags()
  }

  initializeValues(): void {
    this.loading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.tags$ = this.store.pipe(select(dataSelector))
  }

  fetchPopularTags() {
    this.store.dispatch(getPopularTagsAction())
  }
}
