import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {

    constructor() { }

    public isAuthenticated(): boolean {

        let token: any = localStorage.getItem('token');

        if (token != null && token != undefined && token != 'undefined') {
            var decoded: any = jwt_decode(token);
            console.log(decoded.role);
            localStorage.setItem('role', decoded.role);
            return true;
        }
        return false;
    }

}