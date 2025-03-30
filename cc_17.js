//Task 1: Crate a Customer Class
class Customer {
    constructor(name, email, purchaseHistory){
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(amount){
            this.purchaseHistory.push(amount);//adds a purchase amount to purchaseHistory
    }
    getTotalSpent(){
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);//returns total amount spent
    }
};

const customerA = new Customer("Sam Goodman", "Goodman@gmail.com");
console.log(`New Customer: ${customer.name}, ${customer.email}`);
customerA.addPurchase(200);
customerA.addPurchase(480);
console.log(`Total amount cusomter ${cusotmer.name} spent: $${customerA.getTotalSpent()}`);