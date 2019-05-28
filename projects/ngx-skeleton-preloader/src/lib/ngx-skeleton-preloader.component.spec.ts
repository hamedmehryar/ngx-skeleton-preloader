import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSkeletonPreloaderComponent } from './ngx-skeleton-preloader.component';

describe('NgxSkeletonPreloaderComponent', () => {
  let component: NgxSkeletonPreloaderComponent;
  let fixture: ComponentFixture<NgxSkeletonPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSkeletonPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSkeletonPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
