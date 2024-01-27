import { Component, OnInit } from '@angular/core';
import {
  SortingState,
  Table,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/table-core';
import {
  FlexRenderDirective,
  createAngularTable,
} from 'angular-tanstack-table';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { columns } from '../grouping/column';
import { mockData } from '../utils/mockdata';
import { Person } from '../utils/person';

@Component({
  selector: 'tanstack-sorting',
  templateUrl: 'sorting.html',
  standalone: true,
  imports: [FlexRenderDirective],
})
export class SortingComponent implements OnInit {
  private destroy$ = new Subject<void>();
  sortingState = new BehaviorSubject<SortingState>([]);
  data: Person[] = mockData(10);
  table!: Table<Person>;

  ngOnInit() {
    this.createTable();
    this.sortingState
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (sortingState) => (this.table.options.state.sorting = sortingState)
      );
  }

  createTable() {
    this.table = createAngularTable({
      data: this.data,
      columns: columns,
      state: {
        sorting: this.sortingState.getValue(),
      },
      onSortingChange: (updaterOrValue) => {
        const sorting =
          typeof updaterOrValue == 'function'
            ? updaterOrValue([...this.sortingState.getValue()])
            : updaterOrValue;
        this.sortingState.next(sorting);
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      debugTable: true,
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
