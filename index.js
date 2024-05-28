function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} in account ${this.accountNumber}`);
    } else {
        console.log("Invalid amount for deposit");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
    } else {
        console.log("Insufficient funds");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Balance of account ${this.accountNumber}: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].isActive()) {
            totalBalance += accounts[i].balance;
        }
    }
    return totalBalance;
}

const account1 = new BankAccount(12345, "John Abraham", "Savings", 1020);
const account2 = new BankAccount(123895, "Johny Doe", "Savings", 1040);
const account3 = new BankAccount(123235, "Rahul Rai", "Savings", 1500);

account1.deposit(600);
account2.withdraw(200);
account3.deposit(620);
account1.withdraw(600);
account2.checkBalance();

console.log("Account 1 active status:", account1.isActive());
console.log("Account 2 active status:", account2.isActive());
console.log("Account 3 active status:", account3.isActive());

const allAccounts = [account1, account2, account3];
console.log("Total balance of all active accounts:", getTotalBalance(allAccounts));
