import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {GetPopularTagsResponseInterface} from '../types/getPopularTagsResponse.interface'
import {environment} from '../../../../../environments/environment'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {PopularTagType} from '../../../types/popularTag.type'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopuplarTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.baseApiUrl + '/tags'
    return this.http.get(fullUrl).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
