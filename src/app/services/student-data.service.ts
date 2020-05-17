import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class StudentDataService {

    constructor(private _http: HttpClient) {

    }

    getAllStudents()
    {
        return this._http.get('');
    }
}