import {Component,OnInit} from '@angular/core';
import {Account} from './Account';
import {AccountService} from './Account.Service';

@Component({
    selector: 'app-Account',
    templateUrl: './Account.component.html'
})

export class AccountComponent implements OnInit{
    accounts:Account[];
    constructor(private accountservice:AccountService)
    {}

    ngOnInit():void
    {
      this.getAccounts();
    }

    getAccounts(): void{
        this.accountservice.getAllAccounts().subscribe((accountdata)=>{this.accounts=accountdata,console.log(accountdata)},(error)=>{console.log(error);});
        
    }
}
