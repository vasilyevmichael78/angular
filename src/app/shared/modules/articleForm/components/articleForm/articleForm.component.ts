import {Component, Output, EventEmitter, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'mc-article-form',
  templateUrl: 'articleForm.component.html',
  inputs: ['initialValues', 'isSubmitting', 'errors'],
})
export class ArticleFormComponent implements OnInit {
  //@Input
  initialValues: ArticleInputInterface
  isSubmitting: boolean
  errors: BackendErrorsInterface | null
  //-------------------------------

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()
  form: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    })
  }
  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
