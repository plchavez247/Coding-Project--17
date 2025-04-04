//Task 1: Create a Customer Class
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

const sam = new Customer("Sam Goodman", "goodman@gmail.com");
sam.addPurchase(200);
sam.addPurchase(480);
console.log(`New Customer: ${sam.name}, ${sam.email}`);
console.log(`Total amount customer ${sam.name} spent: $${sam.getTotalSpent()}`);// Logging new customer creation and total spent after purchases

//Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name, clients){
        this.name = name;
        this.clients = [];
    }
    addClient(customer){
        this.clients.push(customer);//adding a customer to the list
    } 
    getClientTotal(name){
        const client = this.clients.find(client => client.name ===name);
        
        return client ? client.getTotalSpent() : 0;// finding client by name and returning the total they spent
    }
};

const jimmy = new Customer("Jimmy", "jimbobsophine@gmail.com");
jimmy.addPurchase(430);
const salesRepA = new SalesRep ("Sal");
salesRepA.addClient(sam);
salesRepA.addClient(jimmy);
console.log(`${salesRepA.name}'s clients: ${salesRepA.clients.map(client => client.name).join(", ")}`)// shows the sales reps clients
console.log(`Total spent by Jimmy: $${salesRepA.getClientTotal("Jimmy")}`);
console.log(`Total spent by Sam: $${salesRepA.getClientTotal("Sam Goodman")}`);//shows how much each client spent

//Task 3: Create  VIPCustomer Class(extends Customer)
class VIPCustomer extends Customer{
    constructor(name, email, vipLevel){
        super(name, email);
        this.vipLevel = vipLevel// additional property
    }
    getTotalSpent(){
        const total = super.getTotalSpent();
        let bonus = 1;
        if (this.vipLevel === "Gold"){// making gold level
            bonus = 1.1;
        } else if (this.vipLevel === "Platinum"){// making platinum level
            bonus = 1.2;
        }
        return total * bonus;// returning total spent times the bonus based on VIPLevel
    }
};

const goldCustomer = new VIPCustomer ("Johnny Z.", "johnjohn@gmail.com", "Gold");
const platinumCustomer = new VIPCustomer("Steven P.", "steviewonder@gmail.com", "Platinum");
goldCustomer.addPurchase(160);
goldCustomer.addPurchase(400);
platinumCustomer.addPurchase(600);
platinumCustomer.addPurchase(640);
console.log(`Customer: ${goldCustomer.name}, Total Spent With Bonus: $${goldCustomer.getTotalSpent()}`);
console.log(`Customer: ${platinumCustomer.name}, Total Spent With Bonus: $${platinumCustomer.getTotalSpent()}`);//logging customers total spent with bonus

//Task 4: Build a Client Report System

function buildClientReport (customers){
    const totalRevenue = customers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);// using .reduce() to calculate total revenue from customers
    const highSpending = customers.filter(customer => customer.getTotalSpent() > 500);//using .filter() to find customer that spent over $500
    const customerSummary = customers.map(customer => ({
        name: customer.name, totalSpent: customer.getTotalSpent(), vipLevel: customer instanceof VIPCustomer ? customer.vipLevel: "Standard"// creating customer summary with .map()
    }))

    console.log(`Total Revenue: $${totalRevenue}`);
    console.log("High-spending customers:", highSpending.map(customer => customer.name))
    console.log("Customer summary:", customerSummary);// logging Total revenue, High-spending customers, Customer summary
};
buildClientReport([sam, jimmy, goldCustomer, platinumCustomer]);