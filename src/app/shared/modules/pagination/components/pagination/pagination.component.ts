import {Component, OnInit} from '@angular/core'
import {UtilsService} from '../../../../services/utils.service'

@Component({
  selector: 'mc-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
  inputs: ['total', 'limit', 'currentPage', 'url'],
})
export class PaginationComponent implements OnInit {
  ///inputs
  total: number
  limit: number
  currentPage: number
  url: string
  //---------------------
  constructor(private utilsService: UtilsService) {}
  pagesCount: number
  pages: number[]
  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
