import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BankAccount } from '../../models/bankAccount';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bankAccount1: BankAccount;
  bankAccount2: BankAccount;
  bankAccount3: BankAccount;

  constructor(public navCtrl: NavController) {
    this.bankAccount1 = new BankAccount('45876', 'Jack Dawson', 1540, 'Share Draft');
    this.bankAccount2 = new BankAccount('45876', 'Jack Dawson', 1700, 'Savings');
    this.bankAccount3 = new BankAccount('45876', 'Jack Dawson', 4500, 'Savings');
  }
  viewAccount(selectedAccount: BankAccount) {
    this.navCtrl.push(AccountPage, {account: selectedAccount});
  }

}
