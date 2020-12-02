import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DnaTestService} from 'src/app/services/dna-test.service';
import {DNATest} from 'src/app/types/dna-test';

@Component({
    selector: 'app-dna-test-details',
    templateUrl: './dna-test-details.component.html',
    styleUrls: ['./dna-test-details.component.css']
})
export class DnaTestDetailsComponent implements OnInit, OnDestroy {

    @Input() dnaTestId: number;

    dnaTest: DNATest = null;

    private subscriptionList: Subscription[] = [];

    constructor(
        private router: Router,
        private dnaService: DnaTestService
    ) { }

    ngOnInit() {
        if (!this.dnaTestId) {
            this.router.navigateByUrl("/not-found", {skipLocationChange: true});
        } else {
            this.subscriptionList.push(
                this.dnaService.findTestDetailsById(this.dnaTestId).subscribe((test: DNATest) => {
                    this.dnaTest = test;
                }, error => {
                    this.router.navigateByUrl("/not-found", {skipLocationChange: true});
                })
            );
        }
    }

    ngOnDestroy() {
        this.subscriptionList.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

}
