class BankAccount{
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    showDetails() {
        console.log("Owner is : ", this.owner)
        console.log("Balance is $", this.balance)
    }
}

class SavingAccount extends BankAccount{
    constructor(owner, balance, interestRate) {
        super(owner, balance)
        this.interestRate = interestRate
    }

    showDetails() {
        super.showDetails()
        console.log("Interest rate is ", this.interestRate,"%")
    }
}

const sa = new SavingAccount("Rahul", 30000.00, 7.5)
sa.showDetails()