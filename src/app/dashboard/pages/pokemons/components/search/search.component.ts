import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() getPokemonByName = new EventEmitter();
  @Output() searchMode = new EventEmitter();

  private unsubscribe$: Subject<void> = new Subject();

  public searchControl: FormControl = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(name => this.searchMode.emit(name.toLowerCase()));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
