import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RedoTestComponent} from './redo-test.component';

describe('RedoTestComponent', () => {
    let component: RedoTestComponent;
    let fixture: ComponentFixture<RedoTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RedoTestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RedoTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
