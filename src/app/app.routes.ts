import { Routes } from '@angular/router';
import { BasicComponent } from './examples/basic/basic';
import { GroupingComponent } from './examples/grouping/grouping';
import { SelectingComponent } from './examples/selecting/selecting';
import { SortingComponent } from './examples/sorting/sorting';
import { AppLayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: BasicComponent,
      },
      { path: 'sorting', component: SortingComponent },
      { path: 'grouping', component: GroupingComponent },
      { path: 'selecting', component: SelectingComponent },
    ],
  },
];
