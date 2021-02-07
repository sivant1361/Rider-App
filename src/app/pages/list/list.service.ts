import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ListService {
  private Lists = [];
  private listUpdated = new Subject();

  constructor(private http: HttpClient, private router: Router) {}

  getLists() {
    this.http.get("http://localhost:8000/lists").subscribe((response) => {
      this.listUpdated.next(response);
    });
    // this.router.navigate(["/"]);
  }

  getListUpdateListener() {
    return this.listUpdated.asObservable();
  }

  deleteLists(id: string) {
    this.http
      .post("http://localhost:8000/lists/" + id, {})
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(["/"]);
  }
}
