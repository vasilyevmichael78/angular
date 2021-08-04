import {AppStateInterface} from '../../../types/appState.interface'
import {PopularTagsStateInterface} from '../types/popularTagsState.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('tags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.isLoading
)
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.error
)
export const dataSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.data
)
