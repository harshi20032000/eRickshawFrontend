import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { WebService } from 'src/app/shared/services/web.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { QueryListComponent } from './query-list/query-list.component';

export interface Tab {
  name: string;
  month: number;
  filterOption?: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-query-view',
  standalone: true,
  imports: [SharedModule, QueryListComponent],
  templateUrl: './query-view.component.html',
})
export class QueryViewComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      name: 'All',
      month: 0,
      isSelected: false,
    },
    {
      name: 'Today',
      month: 3,
      filterOption: 'today',
      isSelected: false,
    },
    {
      name: 'This week',
      month: 6,
      filterOption: 'week',
      isSelected: false,
    },
    {
      name: 'This month',
      month: 6,
      filterOption: 'month',
      isSelected: false,
    },
  ];
  ELEMENT_DATA: Array<any> = [];
  filteredElementData: Array<any> = this.ELEMENT_DATA;
  selectedTab!: Tab;
  queryList = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private webStorage: WebService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.queryList = data.queryData.responsePayload.queryList;
      this.filteredElementData = this.queryList;
    });
  }
  changeTableData(event: MatTabChangeEvent) {
    this.tabs.forEach((eachTab: any) => (eachTab.isSelected = false));
    this.tabs[event.index].isSelected = true;
    this.selectedTab = this.tabs[event.index];
    // const http= inject(HttpClient);
    this.filteredElementData = [];
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8').set('authorization', `Bearer ${this.webStorage.getAuthentication()}`);
    // headers.set
    const headers = new HttpHeaders({
      h1: 'v1',
      authorization: `Bearer ${this.webStorage.getAuthentication}`,
    });
    this.http
      .post(
        `${environment.baseUrl}/getQuery`,
        { filter: this.selectedTab.filterOption },
        { headers: headers }
      )
      .subscribe((data: any) => {
        if (data && !data.hasError) {
          this.filteredElementData = data.responsePayload.queryList;
        }
      });
  }
}
