import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getQueryResolver } from './get-query.resolver';

describe('getQueryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getQueryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
