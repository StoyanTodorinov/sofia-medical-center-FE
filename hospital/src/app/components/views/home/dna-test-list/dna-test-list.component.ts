import {Component, Input, OnInit} from '@angular/core';
import {DNATest, DNATestListItem} from 'src/app/types/dna-test';

@Component({
    selector: 'app-dna-test-list',
    templateUrl: './dna-test-list.component.html',
    styleUrls: ['./dna-test-list.component.css']
})
export class DnaTestListComponent implements OnInit {

    @Input() dnaTests: DNATestListItem[];

    constructor() { }

    ngOnInit() {
    }

}
