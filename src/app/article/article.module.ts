import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleComponent} from './components/article/article.component'
import {EffectsModule} from '@ngrx/effects'

import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/error-message/error-message.module'
import {IsLoadingModule} from '../shared/modules/is-loding/is-loading.module'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {TagListModule} from '../shared/modules/tag-list/tag-list.module'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {ArticleService} from './services/article.service'
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect'
const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    IsLoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
