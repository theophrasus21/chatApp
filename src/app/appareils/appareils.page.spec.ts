import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppareilsPage } from './appareils.page';

describe('AppareilsPage', () => {
  let component: AppareilsPage;
  let fixture: ComponentFixture<AppareilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppareilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
