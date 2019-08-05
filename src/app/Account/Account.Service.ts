import {Http} from '@angular/http';
import {Injectable}  from '@angular/core';
import {Observable} from 'rxjs';
import {Account} from './Account';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';

@Injectable()
export class AccountService
{
    constructor(private httpService:Http){}

    getAllAccounts(): Observable<Account[]>{
       return this.httpService.get(" http://localhost:5000/products/").pipe(map(response=>response.json()));
    }


    private handleError(error:Response)
    {
        return Observable.throw(error);
    }
    

    
}