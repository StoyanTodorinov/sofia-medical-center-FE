import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DnaTestService} from 'src/app/services/dna-test.service';
import {DNATest, DNATestRedoBody} from 'src/app/types/dna-test';

@Component({
    selector: 'app-redo-test',
    templateUrl: './redo-test.component.html',
    styleUrls: ['./redo-test.component.css']
})
export class RedoTestComponent implements OnInit, OnDestroy {

    dnaTestId: number = null;
    testResult: number = null;
    dnaTest: DNATest = null;
    form: FormGroup = null;

    private subscriptionList: Subscription[] = [];

    constructor(
        private route: ActivatedRoute,
        private dnaService: DnaTestService,
        private router: Router
    ) {
        this.form = new FormGroup({
            id: new FormControl({value: 0, disabled: true}),
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
                [Validators.required, Validators.pattern(/^[ATGC]+$/), Validators.minLength(10), Validators.maxLength(255)]
            )
        });
    }

    ngOnInit() {
        this.dnaTestId = Number(this.route.snapshot.params["dnaTestId"]);
        if (!this.dnaTestId) {
            this.router.navigateByUrl("/not-found", {skipLocationChange: true});
            return;
        }
        this.subscriptionList.push(
            this.dnaService.findTestDetailsById(this.dnaTestId).subscribe((test: DNATest) => {
                this.dnaTest = test;
                this.form.patchValue({
                    id: test.id,
                    patientPhoneNumber: test.patientPhoneNumber,
                    patientName: test.patientName,
                    name: test.name,
                    age: test.age,
                    email: test.email,
                    dna: test.dna
                });
            })
        );
    }

    redoTest() {
        const body: DNATestRedoBody = {id: this.dnaTestId, ...this.form.value};
        this.subscriptionList.push(
            this.dnaService.updateATest(body).subscribe((testResult: number) => {
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
