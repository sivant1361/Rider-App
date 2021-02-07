import { Component, OnDestroy, OnInit } from "@angular/core";
import { PageSettingsModel } from "@syncfusion/ej2-angular-treegrid";
import { ListService } from "./list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit, OnDestroy {
  public data: Object[];
  public pageSettings: PageSettingsModel;
  public listSubs: Subscription;

  constructor(private listService: ListService) {}
  ngOnInit() {
    this.listService.getLists();
    this.listSubs = this.listService
      .getListUpdateListener()
      .subscribe((lists: Object[]) => {
        this.data = lists;
        console.log("Data:",this.data);
      });
    this.pageSettings = { pageSize: 6 };
  }
  ngOnDestroy() {
    this.listSubs.unsubscribe();
  }
}
