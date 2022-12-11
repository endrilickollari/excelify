import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFileInfoComponent } from './show-file-info.component';

describe('ShowFileInfoComponent', () => {
  let component: ShowFileInfoComponent;
  let fixture: ComponentFixture<ShowFileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
