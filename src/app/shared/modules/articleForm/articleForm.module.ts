import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleFormComponent} from './components/articleForm/articleForm.component'
import {ReactiveFormsModule} from '@angular/forms'
import {BackenErrorMessagesModule} from '../backendErrorMessages/backenErrorMessages.module'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackenErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
