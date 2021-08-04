import {FeedStateInterface} from '../modules/feed/types/feedState.interface'
import {PopularTagsStateInterface} from '../modules/popular-tags/types/popularTagsState.interface'
import {ArticleStateInterface} from '../../article/types/articleState.interface'
import {CreateArticleStateInterface} from '../../createArticle/types/createArticleState.interface'
import {UpdateArticleStateInterface} from '../../updateArticle/types/updateArticleState.interface'

export interface AppStateInterface {
  auth: AppStateInterface
  feed: FeedStateInterface
  tags: PopularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  updateArticle: UpdateArticleStateInterface
}
