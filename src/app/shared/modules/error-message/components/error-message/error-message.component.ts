import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'mc-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  inputs: ['errorMessage'],
})
export class ErrorMessageComponent {
  errorMessage: string = 'Something went wrong'
}
