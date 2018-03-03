import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteWsComponent } from './teste-ws.component';

describe('TesteWsComponent', () => {
  let component: TesteWsComponent;
  let fixture: ComponentFixture<TesteWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
