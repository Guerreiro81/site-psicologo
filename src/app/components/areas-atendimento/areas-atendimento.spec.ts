import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreasAtendimento } from './areas-atendimento';

describe('AreasAtendimento', () => {
  let component: AreasAtendimento;
  let fixture: ComponentFixture<AreasAtendimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreasAtendimento],
    }).compileComponents();

    fixture = TestBed.createComponent(AreasAtendimento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
