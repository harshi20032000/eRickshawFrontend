import { bootstrapApplication } from '@angular/platform-browser';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  withInMemoryScrolling,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './app/app.config';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, APP_CONFIG).catch((err) =>
  console.error(err)
);
