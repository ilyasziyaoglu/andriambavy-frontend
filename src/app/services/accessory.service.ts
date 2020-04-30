import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';
import {HttpMethod, HttpService} from './base/http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccessoryService {

  basePath = 'accessory';

  constructor(
    private httpService: HttpService,
  ) {
  }

  getAccessoriesByModelId(modelId, cb) {
    const url = this.basePath + '?modelId=' + modelId;
    this.httpService.doRequest(HttpMethod.GET, url, '', (results) => {
      results = results.reduce((r, a) => {
        a = this.setImgUrls(a);
        r[a.mainCategory] = r[a.mainCategory] || {};
        r[a.mainCategory][a.subCategory] = (r[a.mainCategory][a.subCategory] || []);
        r[a.mainCategory][a.subCategory].push(a);
        return r;
      }, {});
      cb(results);
    });
  }

  saveAccessory(accessory) {
    const clone = {...accessory};
    clone.colors = JSON.stringify(clone.colors);
    delete clone.properties;
    delete clone.isActive;
    delete clone.currentColor;
    delete clone.isAccessory;
    delete clone.cma;
    delete clone.location;
    delete clone.angles;
    delete clone.src;

    let accssoryToSave: Accessory;
    try {
      accssoryToSave = {...clone};
      this.httpService.doRequest(HttpMethod.POST, this.basePath, accssoryToSave);
    } catch (e) {
      console.log('Accessory doesnt match with right request template. Accessory: ', clone, e);
    }
  }

  saveColors(accessory) {
    this.saveAccessory(accessory);
  }

  setImgUrls(accessory) {
    const basePath = environment.baseAccessoryImgUrl + accessory.mainCategory.toLowerCase() + '/' + accessory.subCategory.toLowerCase() + '/' + accessory.name.toLowerCase() + '/';
    accessory.src = basePath + accessory.name.toLowerCase() + '.png';
    accessory.angles = [];
    for (let i = 0; i < 8; i++) {
      accessory.angles.push(basePath + accessory.name.toLowerCase() + '_' + i + '.png');
    }
    return accessory;
  }

  getMainCategoryImgUrl(accessory) {
    return environment.baseAccessoryImgUrl + accessory.mainCategory.toLowerCase() + '/' + accessory.mainCategory.toLowerCase() + '.jpg';
  }

  getSubCategoryImgUrl(accessory) {
    return environment.baseAccessoryImgUrl + accessory.mainCategory.toLowerCase() + '/' + accessory.subCategory.toLowerCase() + '/' + accessory.subCategory.toLowerCase() + '.jpg';
  }

  setPropertyDefaults(modelId, accessory) {
    accessory.scale = accessory.scale || 1;
    accessory.location = 0;
    accessory.colors = accessory.colors || {
      orginal: {
        hue: 0,
        saturate: 100,
        contrast: 100,
        brightness: 1,
        grayscale: 0,
        sepia: 0
      }
    };
    accessory.currentColor = accessory.colors.orginal;

    // TODO burada admin mi degil mi ona gore true veya false yap.
    if ((accessory.properties == null || !accessory.properties.props[accessory.cma]) && true) {
      accessory.properties = {
        bagId: modelId,
        accessoryId: accessory.id,
        properties: {}
      };
      accessory.properties.props[accessory.cma] = {0: {}};
      for (let i = 0; i < 10; i++) {
        accessory.properties.props[accessory.cma][accessory.location][i] = {
          disabled: false,
          rotate: 0,
          angle: 0,
          x: 50,
          y: 50
        };
      }
    } else if (!accessory.properties.props[accessory.cma]) {
      const sides = [];
      for (const side in accessory.properties.props) {
        sides.push(side);
      }
      accessory.cma = sides[0];
      Swal.fire({
        title: 'Info',
        text: 'This accessory only can add to this sides: ' + sides.toString()
      });
    }

    return accessory;
  }
}

export class Accessory {
  id: number;
  name: string;
  price: number;
  mainCategory: string
  subCategory: string;
  colors: string;
  scale: number;
}
