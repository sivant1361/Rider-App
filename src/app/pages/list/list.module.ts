import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from "./list.component";
import { HttpClientModule } from "@angular/common/http";

import { TreeGridModule } from "@syncfusion/ej2-angular-treegrid";
import {
  PageService,
  SortService,
  FilterService,
} from "@syncfusion/ej2-angular-treegrid";

export const routes = [
  { path: "", component: ListComponent, pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TreeGridModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListComponent],
  providers: [PageService, SortService, FilterService],
})
export class ListModule {}
