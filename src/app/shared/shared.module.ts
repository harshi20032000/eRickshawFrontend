import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { DiaplayImagesComponent } from './components/diaplay-images/diaplay-images.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SwiperDirective } from './utilities/swiper.directive';

@NgModule({
  imports: [
    CommonModule,
    SwiperDirective,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    DiaplayImagesComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    CommonModule,
    SwiperDirective,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
  ],
})
export class SharedModule {}
