import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewLicenseComponent } from './renew-license.component';

describe('RenewLicenseComponent', () => {
  let component: RenewLicenseComponent;
  let fixture: ComponentFixture<RenewLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
