import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {AppStateInterface} from '../../../../types/appState.interface'
import {isLoggedInSelector} from '../../../../../auth/store/selectors'

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: 'feed-toggler.component.html',
  inputs: ['tagName'],
})
export class FeedTogglerComponent implements OnInit {
  tagName: string | null //@Input
  isLoggedIn$: Observable<boolean>
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
