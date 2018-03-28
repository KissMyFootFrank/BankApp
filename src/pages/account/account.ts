import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankAccount } from '../../models/bankAccount';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
bankAccount: BankAccount;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bankAccount = this.navParams.get('account');
  }
  

  

}
