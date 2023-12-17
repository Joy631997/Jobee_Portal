import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityLinksComponent } from './nationality-links.component';

describe('NationalityLinksComponent', () => {
  let component: NationalityLinksComponent;
  let fixture: ComponentFixture<NationalityLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalityLinksComponent]
    });
    fixture = TestBed.createComponent(NationalityLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
