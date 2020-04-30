import {AfterViewInit, Component} from '@angular/core';
import {ModelService} from '../../services/model.service';
import {AccessoryService} from '../../services/accessory.service';
import {ModelAccessoryService} from '../../services/model-accessory.service';

@Component({
  selector: 'ngx-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements AfterViewInit {
  models: any = [];
  accessories: any = [];
  currentModel: any;
  currentAccessories: any = [];
  currentElement: any;
  currentMatTabIndex = 0;

  constructor(
    private modelService: ModelService,
    private accessoryService: AccessoryService,
    private propertiesService: ModelAccessoryService,
  ) {}

  ngAfterViewInit(): void {
    const self = this;
    this.modelService.getModels(models => {
      self.models = models;
    });
  }

  onModelSelect(model) {
    if (!this.currentModel || model.id !== this.currentModel.id) {
      model.colors = model.colors || {
        orginal: {
          hue: 0,
          saturate: 100,
          contrast: 100,
          brightness: 1,
          grayscale: 0,
          sepia: 0,
        },
      };
      model.currentColor = model.colors.orginal;
      model.isModel = true;
      this.currentModel = model;
      this.currentModel.angle = 0;
      this.accessoryService.getAccessoriesByModelId(model.id, accessories => {
        this.accessories = accessories;
        this.currentMatTabIndex = accessories ? 1 : 0;
      });
    } else {
      this.currentMatTabIndex = this.accessories ? 1 : 0;
    }
  }

  onAccessorySelect(accessory) {
    this.propertiesService.getProperties(this.currentModel.id, accessory.id, properties => {
      accessory.properties = properties;
      accessory.cma = this.currentModel.angle;
      accessory.isAccessory = true;
      if (this.currentAccessories.length > 0) {
        this.currentAccessories[this.currentAccessories.length - 1].isActive = false;
      }
      accessory.isActive = true;
      accessory = this.accessoryService.setPropertyDefaults(this.currentModel.id, accessory);
      this.currentAccessories.push({...accessory});
      this.currentElement = this.currentAccessories[this.currentAccessories.length - 1];
    });
  }

  sum(arr: any, key: string) {
    return arr.reduce((a, b) => a + (b[key] || 0), 0);
  }
}
