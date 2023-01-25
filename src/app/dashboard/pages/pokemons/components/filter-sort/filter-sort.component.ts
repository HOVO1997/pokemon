import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {HelperService} from "@services/helper.service";

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSortComponent {
  @Output() typeFilter = new EventEmitter();

  constructor(public helperService: HelperService) {}

  public selectType(id: number): void {
    this.typeFilter.emit(id);
  }
}
