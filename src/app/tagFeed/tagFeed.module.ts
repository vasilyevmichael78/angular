import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagFeedComponent} from './components/tagFeed/tagFeed.component'
import {RouterModule} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'
const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
