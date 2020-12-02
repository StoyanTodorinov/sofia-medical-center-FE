import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    dnaTestId: number = null;

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.dnaTestId = Number(this.route.snapshot.params["dnaTestId"]);
    }

}
