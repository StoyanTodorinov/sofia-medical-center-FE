import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DnaTestService} from 'src/app/services/dna-test.service';
import {DNATestListItem} from 'src/app/types/dna-test';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    dropDownText: string = "Filter by";
    dropDownInputActive: boolean = true;
    searchText: string = "";
    dnaTests: DNATestListItem[] = null;

    private subscriptionList: Subscription[] = [];

    constructor(
        private dnaTestService: DnaTestService
    ) { }

    ngOnInit() {
        this.subscriptionList.push(
            this.dnaTestService.findAllTests().subscribe((tests: DNATestListItem[]) => this.dnaTests = tests)
        );
    }

    changeButtonText(text: string) {
        if (this.dropDownInputActive) {
            this.dropDownInputActive = false;
        }
        this.dropDownText = text;
    }

    filterTests() {
        if (this.searchText) {
            switch (this.dropDownText) {
                case "Patient name":
                    this.subscriptionList.push(
                        this.dnaTestService.findTestsByPatientName(this.searchText)
                            .subscribe((tests: DNATestListItem[]) => this.dnaTests = tests)
                    );
                    break;
                default:
                    this.subscriptionList.push(
                        this.dnaTestService.findTestsByPatientPhoneNumber(this.searchText)
                            .subscribe((tests: DNATestListItem[]) => this.dnaTests = tests)
                    );
                    break;
            }
        }
    }

    ngOnDestroy() {
        this.subscriptionList.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
}
