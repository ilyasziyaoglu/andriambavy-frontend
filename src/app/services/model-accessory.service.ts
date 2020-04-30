import {Injectable} from '@angular/core';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class ModelAccessoryService {

  basePath = 'model-accessory';

  constructor(
    private httpService: HttpService,
  ) {
  }

  getProperties(modelId, accessoryId, cb) {
    const url = this.basePath + '?modelId=' + modelId + '&accessoryId=' + accessoryId;
    this.httpService.doRequest(HttpMethod.GET, url, '', result => {
      result.props = JSON.parse(result.props);
      cb(result);
    });
  }

  saveProperties(properties) {
    const clone = {...properties};
    clone.props = JSON.stringify(clone.props);
    let propertiesToSave: Properties;
    try {
      propertiesToSave = {...clone};
      this.httpService.doRequest(HttpMethod.POST, this.basePath, propertiesToSave);
    } catch (e) {
      console.error('Properties doesnt match with right request template. Properties: ', clone, e);
    }
  }
}

export class Properties {
  id: number;
  modelId: number;
  accessoryId: number;
  props: string;
}
