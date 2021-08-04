import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedTogglerComponent} from './components/feed-togler/feed-toggler.component'
import {AppRoutingModule} from '../../../app-routing.module'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
