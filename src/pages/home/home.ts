import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BankAccount } from '../../models/bankAccount';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bankAccount: BankAccount;
  constructor(public navCtrl: NavController) {
    this.bankAccount = new BankAccount('45876', 'Jack Dawson', 1540);
  }

}
