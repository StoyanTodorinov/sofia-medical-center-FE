import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DnaTestDetailsComponent} from './dna-test-details.component';

describe('DnaTestDetailsComponent', () => {
    let component: DnaTestDetailsComponent;
    let fixture: ComponentFixture<DnaTestDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DnaTestDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DnaTestDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
