import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { DialogData } from 'src/app/models/dialog-data';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  contents: any = [];
  testimonials: any = [];

  vehicleConfig = CONSTANTS.vehicleConfig as SwiperOptions;
  reviewConfig = CONSTANTS.reviewConfig as SwiperOptions;
  staticConfig = CONSTANTS.staticConfig as SwiperOptions;
  queryForm = new FormGroup({
    queryName: new FormControl('', Validators.required),
    queryEmail: new FormControl('', [Validators.required, Validators.email]),
    queryPhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    queryMessage: new FormControl('', Validators.required),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private http: HttpClient,
    private dialogService: MatDialogService
  ) {}

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params); // { order: "popular" }
      if (params.target) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(params.target);
        }, 1600);
      }

      // this.order = params.order;

      // console.log(this.order); // popular
    });
  }

  ngOnInit(): void {
    const productDetails = this.activatedRoute.snapshot.data['productDetails'];
    this.contents = Array(10).fill(productDetails.products).flat();
    this.testimonials = productDetails.testimonials;
    // const headers: any = new HttpHeaders({ mode: 'no-cors' });
    // this.http
    //   .get(`${environment.baseUrl}/getHomeDetails`, headers)
    //   .subscribe((data: any) => {});
  }

  sendQuery() {
    const payload = {
      queryID: uuidv4(),
      queryPhone: '' + this.queryForm.value.queryPhone,
      queryEmail: this.queryForm.value.queryEmail,
      queryMessage:
        `Message from Mr/Ms ${this.queryForm.value.queryName}:  ` +
        this.queryForm.value.queryMessage,
    };
    if (this.queryForm.valid) {
      this.http
        .post(`${environment.baseUrl}/createQuery`, payload)
        .subscribe((data: any) => {
          this.dialogService.openDialog({
            data: {
              title: data.hasError ? 'Error' : 'Success',
              type: data.hasError ? 'error' : 'success',
              message: data.hasError
                ? data.extendedMessage
                : 'Query raised successfully',
            } as DialogData,
          });
        });
    }
  }

  getFeatureList(list: any): Array<any> {
    return list.split(',');
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
  }
}
