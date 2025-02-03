import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskviewComponent } from './taskview.component';

describe('TaskviewComponent', () => {
  let component: TaskviewComponent;
  let fixture: ComponentFixture<TaskviewComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ TaskviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
