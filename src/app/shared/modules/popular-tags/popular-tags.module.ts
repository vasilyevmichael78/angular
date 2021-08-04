import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagsComponent} from './components/popular-tags/popular-tags.component'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {PopularTagsService} from './services/popular-tags.service'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../error-message/error-message.module'
import {IsLoadingModule} from '../is-loding/is-loading.module'
import {TagListModule} from '../tag-list/tag-list.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('tags', reducers),
    RouterModule,
    ErrorMessageModule,
    IsLoadingModule,
    TagListModule,
  ],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
