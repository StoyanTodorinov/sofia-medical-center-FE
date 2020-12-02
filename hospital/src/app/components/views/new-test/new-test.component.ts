import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {DnaTestService} from 'src/app/services/dna-test.service';
import {DNATestCreateBody} from 'src/app/types/dna-test';

@Component({
    selector: 'app-new-test',
    templateUrl: './new-test.component.html',
    styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit, OnDestroy {

    form: FormGroup = null;
    testResult: number = null;

    private subscriptionList: Subscription[] = [];

    constructor(
        private dnaService: DnaTestService
    ) {
        this.form = new FormGroup({
            patientPhoneNumber: new FormControl(
                '',
                [Validators.required, Validators.minLength(6), Validators.maxLength(60)]
            ),
            patientName: new FormControl(
                '',
                [Validators.required, Validators.minLength(6), Validators.maxLength(60)]
            ),
            name: new FormControl(
                '',
                [Validators.required, Validators.minLength(3), Validators.maxLength(60)]
            ),
            age: new FormControl(
                0,
                [Validators.required, Validators.min(10), Validators.max(150)]
            ),
            email: new FormControl(
                '',
                [Validators.required, Validators.minLength(10), Validators.maxLength(60)]
            ),
            dna: new FormControl(
                '',
                [Validators.required, Validators.pattern(/^[ATGC]+$/), Validators.minLength(10)]
            )
        });
    }

    ngOnInit() {
    }

    createTest() {
        const body: DNATestCreateBody = this.form.value;
        this.subscriptionList.push(
            this.dnaService.createATest(body).subscribe((testResult: number) => {
                this.testResult = testResult;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptionList.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
}
