import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGetConfirmComponent } from './post-get-confirm.component';

describe('PostGetConfirmComponent', () => {
  let component: PostGetConfirmComponent;
  let fixture: ComponentFixture<PostGetConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGetConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
