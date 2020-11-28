import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindMovieComponent } from './find-movie.component';

describe('FindMovieComponent', () => {
  let component: FindMovieComponent;
  let fixture: ComponentFixture<FindMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMovieComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
