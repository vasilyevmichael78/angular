import {Component, OnInit} from '@angular/core'
import {PopularTagType} from '../../../../types/popularTag.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  inputs: ['tags'],
})
export class TagListComponent {
  tags: PopularTagType[] //@input
}
