import {UpdateArticleStateInterface} from '../types/updateArticleState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/updateArticle.action'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action'

const initialState: UpdateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null,
}
export const updateArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    updateArticleFailureAction,
    (state, action): UpdateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): UpdateArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)
export function reducers(state: UpdateArticleStateInterface, action: Action) {
  return updateArticleReducer(state, action)
}
