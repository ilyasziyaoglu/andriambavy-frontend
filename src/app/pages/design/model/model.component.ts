import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {

  @Input() model: any;
  @Output() modelSelect = new EventEmitter();

  constructor() { }

  onModelSelect() {
    this.modelSelect.emit();
  }
}
