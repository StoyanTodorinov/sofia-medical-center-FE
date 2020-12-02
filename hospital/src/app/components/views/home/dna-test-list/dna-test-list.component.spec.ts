import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DnaTestListComponent} from './dna-test-list.component';

describe('DnaTestListComponent', () => {
    let component: DnaTestListComponent;
    let fixture: ComponentFixture<DnaTestListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DnaTestListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DnaTestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
