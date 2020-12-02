import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {environment} from 'src/environments/environment';
import {APIResponse} from '../types/api-response';
import {DNATest, DNATestCreateBody, DNATestListItem, DNATestRedoBody} from '../types/dna-test';

@Injectable({
    providedIn: 'root'
})
export class DnaTestService {

    private readonly BASE_ACCESS_POINT: string = "/tests";

    constructor(private http: HttpClient) { }

    createATest(data: DNATestCreateBody): Observable<number> {
        return this.http
            .post(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/create`, data)
            .pipe(map((data: APIResponse) => Number(data)));
    }

    updateATest(data: DNATestRedoBody): Observable<number> {
        return this.http
            .put(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/update`, data)
            .pipe(map((data: APIResponse) => Number(data)));
    }

    findAllTests(): Observable<DNATestListItem[]> {
        return this.http
            .get(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/all`)
            .pipe(map((data: APIResponse[]) => data.map((item: APIResponse) => new DNATestListItem(item))));
    }

    findTestsByPatientName(name: string): Observable<DNATestListItem[]> {
        return this.http
            .get(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/all/name/${name}`)
            .pipe(map((data: APIResponse[]) => data.map((item: APIResponse) => new DNATestListItem(item))));
    }

    findTestsByPatientPhoneNumber(phoneNumber: string): Observable<DNATestListItem[]> {
        return this.http
            .get(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/all/phone-number/${phoneNumber}`)
            .pipe(map((data: APIResponse[]) => data.map((item: APIResponse) => new DNATestListItem(item))));
    }

    findTestDetailsById(id: number): Observable<DNATest> {
        return this.http
            .get(`${environment.apiEndpoint}${this.BASE_ACCESS_POINT}/details/${id}`)
            .pipe(map((data: APIResponse) => new DNATest(data)));
    }
}
