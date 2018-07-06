import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class TestService {
    
    constructor(private http: Http) { }

    test(){
        var urlEndpoint = "http://localhost:8762" + "/employee";
        return this.http.get(urlEndpoint)
            .map(res => {
                var response;
                switch (res.status) {
                    case 200:
                        response = res.text();
                        break;

                    default:
                        response = res.text();
                        break;
                }
                return response;
            })
    }

}