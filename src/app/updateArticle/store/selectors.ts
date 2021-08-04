import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../shared/types/appState.interface'
import {UpdateArticleStateInterface} from '../types/updateArticleState.interface'

export const updateArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UpdateArticleStateInterface
>('updateArticle')
export const isSubmittingSelector = createSelector(
  updateArticleFeatureSelector,
  (updateArticleState: UpdateArticleStateInterface) =>
    updateArticleState.isSubmitting
)
export const isLoadingSelector = createSelector(
  updateArticleFeatureSelector,
  (updateArticleState: UpdateArticleStateInterface) =>
    updateArticleState.isLoading
)
export const validationErrorsSelector = createSelector(
  updateArticleFeatureSelector,
  (updateArticleState: UpdateArticleStateInterface) =>
    updateArticleState.validationErrors
)
export const articleSelector = createSelector(
  updateArticleFeatureSelector,
  (updateArticleState: UpdateArticleStateInterface) =>
    updateArticleState.article
)
