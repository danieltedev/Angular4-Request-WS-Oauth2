import { TestBed, inject } from '@angular/core/testing';

import { WsOauth2Service } from './ws-oauth2.service';

describe('WsOauth2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsOauth2Service]
    });
  });

  it('should be created', inject([WsOauth2Service], (service: WsOauth2Service) => {
    expect(service).toBeTruthy();
  }));
});
