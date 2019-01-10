import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports: [
                                       RouterTestingModule,
                                       FormsModule,
                                       ReactiveFormsModule
                                     ],
                                     declarations: [
                                       AppComponent
                                     ],
                                   }).compileComponents();
  }));

  it('title is money-changer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('money-changer');
  });

  it('permutationCount should be 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.permutationCount).toEqual(0);
  });

  it('getChange', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.change.value = 5;
    app.getChange();
    expect(app.permutationCount).toEqual(2);
    expect(app.permutations).toEqual([[1, 1, 1, 1, 1], [5]]);
    expect(app.change.value).toEqual(null);
  });
});
