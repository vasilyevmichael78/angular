import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {UpdateArticleComponent} from './components/updateArticle/updateArticle.component'
import {UpdateArticleService} from './services/updateArticle.service'
import {UpdateArticleEffect} from './store/effects/updateArticle.effect'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {IsLoadingModule} from '../shared/modules/is-loding/is-loading.module'
import {BackenErrorMessagesModule} from '../shared/modules/backendErrorMessages/backenErrorMessages.module'
const routes = [
  {
    path: 'articles/:slug/edit',
    component: UpdateArticleComponent,
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('updateArticle', reducers),
    IsLoadingModule,
    BackenErrorMessagesModule,
  ],
  declarations: [UpdateArticleComponent],
  providers: [UpdateArticleService, SharedArticleService],
})
export class UpdateArticleModule {}
