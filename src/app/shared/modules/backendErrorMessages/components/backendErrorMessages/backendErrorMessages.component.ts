import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {newArray} from '@angular/compiler/src/util'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['backendErrorMessages.component.scss'],
  inputs: ['backendErrors'],
})
export class BackendErrorMessagesComponent implements OnInit {
  backendErrors: BackendErrorsInterface //@Input

  errorMessages: string[] = []
  constructor() {}
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
