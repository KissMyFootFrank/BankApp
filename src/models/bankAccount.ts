export class BankAccount {
    constructor(accountNumber1: string, accountHolder1: string, totalBalance1: number) {
        this.accountNumber = accountNumber1;
        this.accountHolder = accountHolder1;
        this.totalBalance = totalBalance1;
    }
    totalBalance: number;
    accountNumber: string;
    accountHolder: string;
    status: string;
    depositAmount: string;
    withdrawalAmount: string;
    deposit () {
        if (parseFloat(this.depositAmount) > 500) {
            this.status = 'Deposit amount exceeds the deposit limit.';
        } else if (parseFloat(this.depositAmount) <= 0) {
            this.status = 'Deposit amount must be greater than $0.00.';
        } else {
            this.totalBalance = this.totalBalance + parseFloat(this.depositAmount);
            this.status = 'Successfully deposited $' + this.depositAmount + '.';
            this.depositAmount = "";
        }
    };
    withdraw () {
        if (this.totalBalance - parseFloat(this.withdrawalAmount) >= 1) {
            this.totalBalance = this.totalBalance - parseFloat(this.withdrawalAmount);
            this.status = 'Successfully withdrew $' + this.withdrawalAmount + '.';
            this.withdrawalAmount = "";
        } else if (parseFloat(this.withdrawalAmount) <= 0) {
            this.status = 'Withdrawal amount must be greater than $0.00.';
        } else {
            this.status = 'Withdrawal amount exceeds account balance.';
        }
    };

}