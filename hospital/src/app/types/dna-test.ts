import {APIResponse} from './api-response';

export class DNATest {

    id: number
    userId: number | null;
    patientPhoneNumber: string;
    patientName: string;
    name: string;
    age: number;
    email: string;
    dna: string;
    testResult: number;
    executionDate: Date;

    constructor(data: APIResponse) {
        this.id = Number(data['id']);
        this.userId = Number(data['userId']);
        this.patientPhoneNumber = data['patientPhoneNumber'];
        this.patientName = data['patientName'];
        this.name = data['name'];
        this.age = Number(data['age']);
        this.email = data['email'];
        this.dna = data['dna'];
        this.testResult = Number(data['testResult']);
        this.executionDate = new Date(data['executionDate']);
    }
};

export class DNATestListItem {

    id: number;
    patientPhoneNumber: string;
    patientName: string;
    name: string;
    dna: string;
    testResult: number;

    constructor(data: APIResponse) {
        this.id = Number(data['id']);
        this.patientPhoneNumber = data['patientPhoneNumber'];
        this.patientName = data['patientName'];
        this.name = data['name'];
        this.dna = data['dna'];
        this.testResult = data['testResult'];
    }
};

export type DNATestCreateBody = {
    patientPhoneNumber: string,
    patientName: string,
    name: string,
    age: number,
    email: string,
    dna: string
};

export type DNATestRedoBody = {
    id: number,
    patientPhoneNumber: string,
    patientName: string,
    name: string,
    age: number,
    email: string,
    dna: string
};