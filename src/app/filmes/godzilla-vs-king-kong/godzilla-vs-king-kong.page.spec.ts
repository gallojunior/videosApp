import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GodzillaVsKingKongPage } from './godzilla-vs-king-kong.page';

describe('GodzillaVsKingKongPage', () => {
  let component: GodzillaVsKingKongPage;
  let fixture: ComponentFixture<GodzillaVsKingKongPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GodzillaVsKingKongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GodzillaVsKingKongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
