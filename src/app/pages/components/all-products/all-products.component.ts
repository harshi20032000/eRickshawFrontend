import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './all-products.component.html',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AllProductsComponent implements OnInit {
  featureConfig = CONSTANTS.featureConfig as SwiperOptions;
  staticConfig = CONSTANTS.staticConfig as SwiperOptions;
  contents!: any[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productDetails = this.activatedRoute.snapshot.data['productDetails'];
    this.contents = Array(10).fill(productDetails.products).flat();
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
  }
}
