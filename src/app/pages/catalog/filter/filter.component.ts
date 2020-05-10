import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductModelService} from '../../../services/product-model.service';

@Component({
    selector: 'ngx-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

    @Output() onFilter = new EventEmitter();

    colors: any = [];
    filter: any = {min: null, max: null, size: [], category: [], colors: []};

    constructor(
        private productModelService: ProductModelService,
    ) {
    }

    ngOnInit() {
        this.productModelService.getColorList(colors => {
            this.colors = colors;
        });
    }

    onFilterEvent() {
      this.onFilter.emit(this.filter);
    }

    onColorSelect(color: any) {
        if (this.colorIncludes(color)) {
            this.deleteColor(color);
        } else {
            this.filter.colors.push(color);
        }
    }

    colorIncludes(color) {
        return this.filter.colors.find(c => c.colorCode === color.colorCode);
    }

    deleteColor(color) {
        const index = this.filter.colors.findIndex(c => c.colorCode === color.colorCode);
        this.filter.colors.splice(index, 1);
    }
}
